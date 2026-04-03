---
title: "Rails + Kamal: Deployment Errors"
seoTitle: "Deploying Rails 8 with Kamal 2: Every Error I Hit and How I Solved It"
date: "2025-11-05"
description: "Every error I hit deploying a Rails 8 app with Kamal on a DigitalOcean droplet, and what actually fixed them."
thumbnail: "/images/thumbnails/rails_kamal_deployment.jpg"
readTime: "6 min read"
tags: ["Ruby on Rails", "DevOps", "Kamal", "PostgreSQL"]
---

I decided to set up deployment before writing any application code. The idea was to avoid the situation where you build everything locally and then spend a week fighting infrastructure at the end. That was the right call, but it still took a while to get the server stable. Here's every error I hit and what fixed it.

## IPv6 vs IPv4

```
PG::ConnectionBad: connection to server at "::1" failed
```

On my Linux machine, `localhost` resolves to the IPv6 address `::1`. The Postgres container was only listening on IPv4 (`127.0.0.1`), so the connection never landed. Docker containers don't inherit the host's network settings, so even if your machine prefers IPv6, the container starts fresh with IPv4 only. Fixing this meant being explicit in `config/database.yml`:

```yaml
development:
  <<: *default
  database: wuwa_planner_development
  host: '127.0.0.1'

test:
  <<: *default
  database: wuwa_planner_test
  host: '127.0.0.1'
```

## Stale Volume Data

```
FATAL: password authentication failed for user "postgres"
```

The password was correct. The problem was that a previous failed container initialization had already written an old password hash into the Postgres volume. Postgres never saw the new password in `.env` because the data directory was already initialized with the old one.

```bash
docker-compose down
docker volume ls | grep wuwa
docker volume rm wuwa-planner_pg_data
docker-compose up
```

Deleting the volume forces Postgres to reinitialize and pick up the correct credentials.

## Underscores in Service Names

```
URI::InvalidURIError: the scheme postgres does not accept registry part: ...@wuwa_planner-db
```

The Docker service was named `wuwa_planner` with an underscore, which Rails defaults to. Docker's internal DNS doesn't handle underscores well in hostnames, so `wuwa_planner-db` wasn't resolving correctly. I renamed everything to use hyphens (`wuwa-planner`, `wuwa-planner-db`) and the `DATABASE_URL` started resolving as expected.

## Special Characters in the Database Password

```
URI::InvalidURIError: bad URI: postgres://rails:geKtByV9zr@NP9F&#q#!6Fb&gp!aK#Ye@...
```

The password I generated in Bitwarden had characters that are reserved in URLs (`@`, `#`, `&`). Those break `DATABASE_URL` parsing. I generated a new alphanumeric-only password.

## DATABASE_URL Not Injected into the Container

```
ActiveRecord::ConnectionNotEstablished: connection to server on socket "/var/run/postgresql/.s.PGSQL.5432" failed
```

This looked like a networking problem but it was simpler: `DATABASE_URL` wasn't making it into the container. Kamal requires secrets to be explicitly listed in `config/deploy.yml`:

```yaml
env:
  secret:
    - DATABASE_URL
```

It also needs to be defined in `.kamal/secrets`. Defining the variable isn't enough; you have to explicitly tell Kamal to inject it.

## Solid Queue Crashing Puma

```
Detected Solid Queue has gone away, stopping Puma...
```

The default Rails 8 config runs Solid Queue inside the Puma process `SOLID_QUEUE_IN_PUMA: true`. This simplifies single-process deployments, but it means if the worker crashes on startup, it takes Puma down with it. During initial setup the worker is likely to fail, so this becomes a crash loop before the app ever serves a request. Setting it to `SOLID_QUEUE_IN_PUMA: false` in `config/deploy.yml` separates the two processes. The web server stays up even if the background worker fails.

## Missing Migrations

```
PG::UndefinedTable: ERROR: relation "solid_queue_recurring_tasks" does not exist
```

The database was connected but the tables didn't exist. A connected database isn't the same as a migrated one. Running migrations manually via Kamal fixed it:

```bash
bin/kamal app exec 'bin/rails db:migrate'
```

## No Root Route

```
ActionController::RoutingError (No route matches [GET] "/")
```

Rails serves a welcome page in development via a middleware shortcut that doesn't exist in production. So a missing root route works locally and fails immediately on the server. I created a `Pages#home` controller and added the route `root "pages#home"` to `config/routes.rb`.

---

- [Rails 8 + Kamal deployment walkthrough](https://www.youtube.com/watch?v=_lRlOGS8Bgo)
- [Setting up Solid Queue, Cache, and Cable on a single database](https://dev.to/mrispoli24/setting-up-solid-cache-on-heroku-with-a-single-database-49c5)
