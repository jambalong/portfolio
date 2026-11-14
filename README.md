# ambalong.dev

My personal site: a blog, a few projects, and an email signup. Built with Astro, React and Tailwind CSS. It uses a custom dark theme with a near-black palette and purple accents.

**Live Site:** [ambalong.dev](https://ambalong.dev)

## Tech Stack

- **Framework:** [Astro](https://astro.build) for static site generation
- **UI Components:** Astro components, plus one React island (the navigation) with TypeScript
- **Icons:** Lucide React in the navigation, inline SVG elsewhere
- **Styling:** Tailwind CSS v4 with a custom dark theme
- **Syntax Highlighting:** Shiki with the Vesper theme
- **Content:** Markdown via Astro Content Collections
- **Email signup:** a plain HTML form that posts to Kit
- **Analytics:** GoatCounter, production builds only
- **Deployment:** Netlify

## Pages

- `/` home: hero, latest three posts, email signup, projects
- `/blog/` every post, newest first, with older posts grouped at the bottom
- `/blog/<slug>/` one post, with a signup block at the end
- `/about/` a short introduction and contact links
- `/projects/pangu-terminal/` what the project does and how it is built
- `/rss.xml` feed of all posts

## Getting Started

### Prerequisites

- Node.js 24+
- npm

### Local Development

```bash
git clone https://github.com/jambalong/portfolio.git
cd portfolio
npm install
npm run dev
```

Visit `http://localhost:4321` to see your local site.

### Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run check` | Build, then scan `dist/` for forbidden strings and em dashes |
| `npm run astro` | Run Astro CLI commands |

## Project Structure

```
/
├── public/                       # Static assets (images, resume, social card)
├── scripts/
│   ├── check-dist.mjs            # Forbidden-string check run by npm run check
│   └── og-card.html              # Source for public/og-image.png
├── src/
│   ├── assets/                   # Images processed by Astro
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── PostList.astro
│   │   ├── Subscribe.astro
│   │   ├── ProjectsSection.astro
│   │   ├── Footer.astro
│   │   ├── Icon.astro
│   │   └── Navigation.tsx        # The only React island
│   ├── config/site.ts            # Name, links, Kit form ID, GoatCounter code
│   ├── content/
│   │   ├── blog/                 # Blog posts (Markdown)
│   │   └── config.ts             # Content collection schema
│   ├── layouts/Layout.astro
│   ├── lib/posts.ts              # Post sorting, read time, date format
│   ├── pages/
│   └── styles/global.css
├── astro.config.mjs
└── package.json
```

## Configuration

Two values in `src/config/site.ts` start empty and turn features on:

- `kitFormId`: the ID of the Kit form. When empty, the signup form is hidden and the pages link to the RSS feed instead.
- `goatcounterCode`: the GoatCounter site code. When empty, or in a dev build, no analytics script is added.

## Design System

```css
--dt-bg:            #0a0a0f  /* Deepest background */
--dt-surface:       #111118  /* Card / section surface */
--dt-border:        #1e1e2e  /* Decorative hairlines only */
--dt-border-strong: #6a6a88  /* Input borders, screenshot frame */
--dt-text:          #e8e8f0  /* Headings, strong text */
--dt-mid:           #b4b4c8  /* Body copy */
--dt-muted:         #8f8fa8  /* Labels, dates, tags */
--dt-accent:        #7c6aff  /* Borders, fills, the italic word in headings */
--dt-accent-text:   #9d8fff  /* Small purple text: eyebrows, links */
```

### Typography

| Token | Font | Usage |
|-------|------|-------|
| `--font-display` | Instrument Serif | Headings, titles |
| `--font-body` | Space Grotesk | Body copy |
| `--font-mono` | DM Mono | Eyebrows, labels, tags |

### Key Utility Classes

- `.dt-display` for Instrument Serif headings
- `.dt-eyebrow` for DM Mono uppercase labels
- `.dt-body` for body copy
- `.dt-tag` for tags
- `.dt-card` for surface cards
- `.dt-btn-primary` and `.dt-btn-ghost` for buttons
- `.blog-article` for blog post typography

## Adding Blog Posts

Create a Markdown file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
seoTitle: "Optional longer title for search results"
description: "Short description for search results and the post list"
date: "2025-01-16"
tags: ["Rails", "Hotwire", "Docker"]
---

Your content here.
```

**Frontmatter fields:**

- `title` (required): Post title
- `seoTitle` (optional): Used in the page `<title>` in place of `title`
- `description` (required): Meta description and the text shown in the post list
- `date` (required): Publication date
- `thumbnail` (optional): Path to an image in `/public`, used as the social card for the post. No current post sets one, so they all use `/og-image.png`
- `tags` (required): Array of topic tags
- `archived` (optional, default `false`): Moves the post under "Older posts" on `/blog/`

Read time is computed from the post body at 200 words a minute.

## The check script

`npm run check` builds the site, then scans text files in `dist/` for strings that should not appear, and for em dashes outside blog posts. Extra patterns can go in a `.forbidden.local` file, one per line. That file is ignored by git.

## Deployment

The site deploys on Netlify with the build command `npm run build` and publish directory `dist`.

## License

This project is open source and available under the [MIT License](LICENSE).

## Connect

- **GitHub:** [@jambalong](https://github.com/jambalong)
- **X:** [@coldbootdev](https://x.com/coldbootdev)
- **Email:** [johnalvin@ambalong.dev](mailto:johnalvin@ambalong.dev)
