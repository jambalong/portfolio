---
title: "Rails + Kamal: The Deployment Errors I Fought (And How I Won)"
date: "2025-11-05"
description: "A deep dive into the infrastructure hurdles of deploying Rails 8 with Kamal, from networking conflicts to Solid Queue stability."
thumbnail: "/images/thumbnails/rails_kamal_deployment.jpg"
readTime: "8 min read"
tags: ["Ruby on Rails", "DevOps", "Kamal", "PostgreSQL"]
---

## Introduction: The Infrastructure Battles Start

When I chose to front-load the deployment of my `Wuthering Waves Planner`, the goal was simple: **get it live, get it stable**. But between my local machine and the virtual private server, I hit a myriad of deployment errors that tested every single assumption I had with deploying an app.

This blog post documents my challenges of deploying a **Rails 8** application powered by **Kamal** and **Postgres**. From the lurking **IPv6-vs-IPv4 conflict** to encountering my first tussle with **Solid Queue**, I encountered- and solved- the kind of issues that seemed insurmountable at first.

My goal here is to give you a bit of guidance. If you're using Kamal, Rails 8, or wrestling with a containerized Postgres database, this is a look at the hardest errors I've come across to date.

---

The first set of errors centered around a fundamental disconnect between my local development environment and the Kamal deployment target. The symptoms were subtle, but the root cause boiled down to networking and configuration assumptions.

## My Connection Is Using IPv6

`PG::ConnectionBad: connection to server at "::1" failed`

On my Linux machine, the simple alias `localhost` resolved to the IPv6 address `::1`. Unfortunately, the Postgres container within my local Docker setup was only configured to listen on **IPv4** (`127.0.0.1`). The connections were never meeting.

Explicitly setting the host in `config/database.yml` to **`host: '127.0.0.1'`** for development and test environments forced the connection over the correct network protocol. **Never assume `localhost` in Docker.**

```yaml
## config/database.yml

development:
  <<: *default
  database: wuwa_planner_development
  host: '127.0.0.1'

test:
  <<: *default
  database: wuwa_planner_test
  host: '127.0.0.1'
```

## Forgot Password?

The next roadblock I faced was a simple one, yet difficult to find: Postgres was refusing a valid password.

`FATAL: password authentication failed for user "postgres"`

I knew the password was correctly configured on my side, but I did change it at some point. This pointed me to the old-password vs. new-password conundrum. The root cause was **Stale Docker Volume Data**. A previous, failed attempt to initialize the container had written the old, encrypted password hash into the local Postgres volume. The new password, though correctly configured in the `.env` file, was being ignored.

The only clean path was to perform a complete teardown of the persistent data:

```bash
docker-compose down # Stop and remove the containers
docker volume ls | grep wuwa # To find the right volume
docker volume rm wuwa-planner_pg_data # <--- Delete the stale volume
docker-compose up # Rebuild and force Postgres to re-initialize
```

## Hyphens Over Underscores

Kamal and Docker are incredibly sensitive to naming conventions. I get confused since I default to underscore (since I work with Ruby). A seemingly harmless naming choice nearly derailed DNS resolution.

`URI::InvalidURIError: the scheme postgres does not accept registry part: ...@wuwa_planner-db (or bad hostname?)`

The initial Docker service name was `service: wuwa_planner` (using an underscore). This naming convention (default with Rails) proved internally invalid for DNS resolution in Docker components during deployment.

So I standardized the entire project on hyphens (wuwa-planner) for the Docker service and image names. This small change guaranteed a valid, predictable DNS hostname (wuwa-planner-db) for my `DATABASE_URL`.

---

The next phase introduced two classic production headaches: URL-safe passwords and ensuring my environment variables actually make it into the container.

## The Non-URL-Safe Password

`URI::InvalidURIError: bad URI: postgres://rails:geKtByV9zr@NP9F&#q#!6Fb&gp!aK#Ye@...`

The production password I generated using a strong password manager (Bitwarden) contained URL-reserved characters (@, #, &). These characters need to be URL-encoded, and failing to do so breaks the entire `DATABASE_URL`.

I generated a new, alphanumeric-only password for the database and ensured the `DATABASE_URL` was built with the clean string. I encourage keeping secrets simple for URI use, or ensuring great URL encoding is applied.

## Missing Variable Somewhere In My Configs?

`ActiveRecord::ConnectionNotEstablished: connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed`

This looked like a networking issue again, but the root cause was actually simpler and more critical: Empty DATABASE_URL. The variable which was defined in the secrets file was not being injected into the running container.

I therefore confirmed that `DATABASE_URL` was explicitly listed under:

```yaml
## config/deploy.yml

env:
  secret:
    - DATABASE_URL
```

and correctly defined in my `.kamal/secrets file`. Deployment tools require explicit permission to inject a secret, which is what I learned.

---

The final hurdle was specific to the latest Rails 8 stack (with its addition of the Solid gems) and its default configuration for background processing with Solid Queue.

## Worker Crash Loop and Puma Premature Shutdown

I finally ran `bin/kamal deploy` with no errors, which gave me great relief, and it felt like I could start writing my first `Models`... However, when I visited the server's IP Address, it was not over.

`Detected Solid Queue has gone away, stopping Puma...`

The environment was defaulting to `SOLID_QUEUE_IN_PUMA: true`. This attempts to run the background worker inside the main web server process. And any immediate worker crash (e.g., a missing config or initial error) forces the web server (Puma) to shut down prematurely, causing a crash loop.

I disabled the embedded worker by explicitly setting `SOLID_QUEUE_IN_PUMA: false` in my `config/deploy.yml`. This separates the web process from the background worker, which allows the web app to stay up even if the worker fails.

## Missing Tables: Migration on Production

While the app was a bit more stable, the database was still throwing errors about missing tables.

`PG::UndefinedTable: ERROR: relation "solid_queue_recurring_tasks" does not exist`

I knew I had set up the database; however, the error meant the tables Solid Queue were expecting simply didn't exist. I thought the `db:prepare` command alone would handle everything, but it seemed like it only set up the *connection*, and not the actual **structure** of the database on the production server. The database was connected, but it was simply empty!

To fix this, I manually told the server to run the database migrations, which is what creates all the tables. Thus, the fix was running this specific command using Kamal to execute it remotely:

```bash
bin/kamal app exec 'bin/rails db:migrate'
```

Once that ran, all the necessary tables (including the weird Solid Queue ones) were created, and the application stopped throwing the `UndefinedTable` error. It was a huge "aha!" moment: just because the database is connected doesn't mean it's built yet.

## The Anti-Climactic Error

The server was up, the database was connected and properly migrated, but why could I still not see my beloved Rails page whenever I create new Rails apps? The final error was purely application logic.

`ActionController::RoutingError (No route matches [GET] "/")`

Expected, kind of silly actually. The application just didn't have any root route defined yet. I was so focused on deployment, I assumed the `Rails::WelcomeController#index` would work on production, the same way it did on the development environment.

I created the `Pages#home` controller and set the `root "pages#home"` route in `config/routes.rb`. Deployment is finally complete!

---

What this whole experience taught me is that successful deployment isn't really about writing crazy, complicated code. It's more about **mastering the basic rules** of the infrastructure underneath. And the biggest help was the debugging errors Ruby on Rails outputted in the logs. I learned that you have to be precise with the basics: making sure the networking is exact, handling secrets carefully so they don't break the URL, ensuring that the correct environment variables actually get injected, and most importantly, understanding how things like my web server (**Puma**) and my background processor (**Solid Queue**) actually work together. I wanted to avoid disabling my Solid gems just for a quick fix. Everything relies on those foundations being stable. I might even encounter new errors on my next deployment lol.

For now, the Wuthering Waves Planner (while still a blank slate) is live, a testament to overcoming the challenges of local development and remote production.

This video provides a helpful guide for fellow developers planning to attempt their first [Rails 8 + Kamal deployment](https://www.youtube.com/watch?v=_lRlOGS8Bgo).

While this article is what assisted me in setting up all three [Solid gems in Rails 8 to use a single database in production](https://briancasel.gitbook.io/cheatsheet/rails-1/setup-solid-queue-cable-cache-in-rails-8-to-share-a-single-database).
