---
title: "From a Droplet to a Free Tier"
seoTitle: "Moving a Rails 8 App from Kamal on DigitalOcean to Render and Neon"
description: "Why Pangu Terminal went offline in July, and the four small commits it took to bring it back on Render with a Neon database."
date: "2026-08-14"
tags: ["Ruby on Rails", "DevOps", "Kamal", "Render"]
---

When I [picked this project](/blog/wuthering-waves-planner-rails-postgresql/) in October 2025, I wrote that I was using Kamal on a DigitalOcean droplet "instead of something managed like Render". I wanted to know how to run my own deployments. Almost ten months later the app runs on Render. This is how that happened.

## What the Droplet Setup Grew Into

After [the first round of errors](/blog/rails-kamal-deployment-errors/), deploying was a command I ran by hand. In January I moved to a new droplet with upgraded specs.

On May 10 I added a deploy job to the GitHub Actions workflow. It ran on pushes to `main`, after every other job in the workflow had passed. It took three more commits that day to get working. The runner didn't have Kamal installed, so I added a `gem install kamal` step. Then the secrets. I first passed them to the deploy step as environment variables, and ended up writing the secrets file that Kamal reads:

```yaml
- name: Write Kamal secrets file
  run: |
    mkdir -p .kamal
    cat > .kamal/secrets << EOF
    KAMAL_REGISTRY_PASSWORD=${{ secrets.KAMAL_REGISTRY_PASSWORD }}
    RAILS_MASTER_KEY=${{ secrets.RAILS_MASTER_KEY }}
    POSTGRES_PASSWORD=${{ secrets.POSTGRES_PASSWORD }}
    DATABASE_URL=${{ secrets.DATABASE_URL }}
    EOF
```

It was the `DATABASE_URL` lesson from the earlier post again. Kamal only injects what it is explicitly given. Apparently I needed to learn it twice.

A week later I changed how the runner trusted the server. The job had been running `ssh-keyscan` against the host on every deploy. I replaced that with a known hosts entry stored as a secret, to prevent a key mismatch.

## Offline

The project reached version 1.0.0 on May 18. The droplet had been paid for with DigitalOcean student credits, and those ran out. On July 11 I changed the README to say this:

> Currently offline. DigitalOcean hosting was decommissioned to control costs.

I commented out the CI badge the same day.

## Four Commits to Come Back

I still wanted the demo to be reachable, and I wanted it to cost nothing. On August 14 I moved the app to Render, with PostgreSQL hosted on Neon. Render builds the repo's existing Dockerfile and deploys from `main` on push.

The first change was seeding. With Kamal, seeds did not run automatically. My runbook had a manual command for it:

```bash
kamal app exec --reuse 'bin/rails db:seed'
```

Now the container's entrypoint script does it on boot:

```bash
if [ "${@: -2:1}" == "./bin/rails" ] && [ "${@: -1:1}" == "server" ]; then
  bundle exec ./bin/rails db:prepare
  bundle exec ./bin/rails db:seed
fi
```

Running seeds on every boot is only safe because of how they are written. They use `find_or_initialize_by` and run inside a transaction, which I covered in [the schema post](/blog/building-the-pangu-terminal-schema/). Rerunning them doesn't create duplicates.

The second change allowed the new hostname in the production config:

```ruby
config.hosts << "panguterminal.ambalong.dev"
config.hosts << "pangu-terminal.onrender.com"
```

The third commented out the deploy job in `ci.yml`, since Render deploys on its own. The scans and tests still run. The fourth updated the README.

The database config needed no change. `config/database.yml` has pointed the primary, cache, queue and cable databases at a single `DATABASE_URL` since November 2025, so the new database needed one connection string.

## What I Gave Up

The README now carries this note:

> Note: hosted on a free tier, the app may take up to a minute to wake up on first load if idle.

The droplet was always running. The free tier is not, and the first visitor after a quiet stretch pays for that with a wait.

The Kamal config and the deployment runbook are still in the repo, and the README says they are no longer active. I set out to learn how to run my own deployments, and I did. The Dockerfile from that setup is the one Render builds now.
