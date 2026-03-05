# Portfolio Website

A modern, high-performance portfolio built with Astro, React, and Tailwind CSS. Features my software engineering projects, technical writing, and professional experience. Designed with a custom dark-technical design system built on a near-black palette with purple accents.

**Live Site:** [ambalong.dev](https://ambalong.dev)

## Tech Stack

- **Framework:** [Astro](https://astro.build) - Static site generation for speed and SEO
- **UI Components:** React 18 with TypeScript
- **Icons:** Lucide React
- **Styling:** Tailwind CSS v4 with a custom dark-technical design system
- **Animations:** Framer Motion for smooth interactions
- **Syntax Highlighting:** Shiki with Vesper theme
- **Content:** Markdown/MDX via Astro Content Collections
- **Deployment:** Netlify with continuous deployment

## Features

### **Project Showcase**

- Featured project spotlight for Pangu Terminal (Rails 8 + Hotwire)
- Additional projects: Ruby Chess Engine, Pebble List
- Live demos and source code links

### **Technical Blog**

- Type-safe blog powered by Astro Content Collections
- Markdown/MDX support with frontmatter validation
- Custom syntax highlighting with Vesper theme
- Fenced code blocks with language labels and copy button
- Responsive grid layout with tags and reading time

### **Performance & Accessibility**

- Static site generation for near-instant page loads
- Partial hydration via Astro Islands keeps JavaScript minimal
- Mobile-first responsive design
- Semantic HTML

### **Developer Experience**

- Type-safe content with Zod schemas
- Hot module replacement in development
- React components with Astro Islands architecture
- Tailwind utility-first styling

## Getting Started

### Prerequisites

- Node.js 24+
- npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/jambalong/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your local site.

### Build Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## Project Structure

```
/
├── public/                       # Static assets (images, fonts, resume)
├── src/
│   ├── assets/                   # Project screenshots and images
│   ├── components/               # React/Astro components
│   │   ├── Hero.tsx
│   │   ├── FeaturedProject.tsx
│   │   ├── Projects.tsx
│   │   ├── BlogCard.tsx
│   │   └── ...
│   ├── content/
│   │   ├── blog/                 # Blog posts (Markdown/MDX)
│   │   └── config.ts             # Content collection schemas
│   ├── layouts/                  # Page layouts
│   │   └── Layout.astro
│   ├── pages/                    # File-based routing
│   │   ├── index.astro           # Homepage
│   │   ├── blog/index.astro      # Blog index
│   │   └── blog/[slug].astro     # Blog posts
│   └── styles/                   # Global styles
│       └── global.css
├── astro.config.mjs              # Astro configuration
├── .node-version                 # Node version management
└── package.json
```

## Design System

The site uses a custom **dark-technical** palette built around near-black surfaces with a purple accent:

```css
--dt-bg:      #0a0a0f  /* Deepest background */
--dt-surface: #111118  /* Card / section surface */
--dt-border:  #1e1e2e  /* Hairline borders */
--dt-text:    #e8e8f0  /* Primary text */
--dt-mid:     #8888a0  /* Body copy */
--dt-muted:   #5a5a72  /* Metadata, labels */
--dt-accent:  #7c6aff  /* Purple accent: links, highlights */
--dt-green:   #6affb0  /* Success states */
--dt-red:     #ff6a6a  /* Error states */
--dt-orange:  #ff9f6a  /* Warning states */
```

### Typography

| Token | Font | Usage |
|-------|------|-------|
| `--font-display` | Instrument Serif | Headings, titles |
| `--font-body` | Space Grotesk | Body copy, paragraphs |
| `--font-mono` | DM Mono | Code, eyebrows, labels, tags |

### Key Utility Classes

- `.dt-display` - Instrument Serif heading
- `.dt-eyebrow` - DM Mono uppercase label
- `.dt-body` - Space Grotesk body copy
- `.dt-tag` - monospace pill tag
- `.dt-card` - sharp-edged surface card
- `.dt-btn-primary` / `.dt-btn-ghost` - button variants
- `.dt-browser` - browser mockup frame
- `.blog-article` - full blog post typography styles

## Adding Blog Posts

Create a new Markdown file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description for SEO and preview cards"
date: "2025-01-16"
thumbnail: "/images/thumbnails/example.jpg"
readTime: "5 min read"
tags: ["Rails", "Hotwire", "Docker"]
---

Your content here using Markdown or MDX...
```

**Frontmatter fields:**

- `title` (required): Post title
- `description` (required): SEO description and card preview
- `date` (required): Publication date
- `thumbnail` (optional): Path to image in /public
- `readTime` (required): Estimated reading duration
- `tags` (required): Array of topic tags

Posts automatically appear on `/blog` sorted by date.

## Deployment

### Netlify (Recommended)

This site is configured for zero-config deployment on Netlify:

1. **Connect your GitHub repository** to Netlify
2. Netlify auto-detects Astro and uses:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Push to `main` branch** → automatic deployment

**Custom Domain:**

- Add `ambalong.dev` in Netlify domain settings
- Update DNS records as instructed
- Free SSL certificate provisioned automatically

### Manual Build

```bash
npm run build
# Deploy the dist/ folder to any static hosting service
```

## Tech Details

### Astro Islands Architecture

React components use Astro's partial hydration:

```astro
<Hero client:load />              <!-- Hydrate immediately -->
<Projects client:visible />       <!-- Hydrate when visible -->
<BlogCard client:visible />       <!-- Hydrate when visible -->
```

### Content Collections

Type-safe blog posts with Zod validation:

```typescript
// src/content/config.ts
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    readTime: z.string(),
  }),
});
```

### Syntax Highlighting

Shiki with the Vesper theme. The `pre` element background is overridden to `var(--dt-surface)` so code blocks integrate with the design system rather than using Vesper's default background. Copy buttons are injected client-side via a script in `[slug].astro`.

### Tailwind v4 + Custom Classes

All custom `.dt-*` and `.blog-article` classes are wrapped in `@layer components` in `global.css`, ensuring Tailwind utility classes always win in the cascade (e.g. `md:hidden` correctly hides the mobile menu button on desktop).

## License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use this as inspiration for your own portfolio, but please don't copy it verbatim. Create something unique that represents you!

## Connect

- **Portfolio:** [ambalong.dev](https://ambalong.dev)
- **GitHub:** [@jambalong](https://github.com/jambalong)
- **LinkedIn:** [in/jambalong](https://linkedin.com/in/jambalong)
- **Email:** [johnalvin@ambalong.dev](mailto:johnalvin@ambalong.dev)

## Acknowledgments

- **Color Palette:** Custom dark-technical design system inspired by [Catppuccin](https://github.com/catppuccin/catppuccin) Mocha
- **Framework:** [Astro](https://astro.build) for static site generation and excellent developer experience
- **Icons:** [Lucide React](https://lucide.dev)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) for smooth interactions
- **Syntax Highlighting:** [Shiki](https://shiki.style) with Vesper theme
- **Hosting:** Deployed on [Netlify](https://netlify.com) with continuous deployment

---

*Built with ❤️ and lots of 🍫*
