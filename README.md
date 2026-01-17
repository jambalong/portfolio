# Portfolio Website

A modern, high-performance portfolio built with Astro, React, and Tailwind CSS. Features my software engineering projects, technical writing, and professional experience. All designed with the Catppuccin Mocha color theme.

**Live Site:** [ambalong.dev](https://ambalong.dev)

## Tech Stack

- **Framework:** [Astro](https://astro.build) - Static site generation for speed and SEO
- **UI Components:** React 18 with TypeScript
- **Icons:** Lucide React
- **Styling:** Tailwind CSS with custom Catppuccin Mocha theme
- **Component Library:** shadcn/ui
- **Animations:** Framer Motion for smooth interactions
- **Syntax Highlighting:** Shiki with custom Catppuccin theme
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
- Custom syntax highlighting with Catppuccin Mocha theme
- Responsive grid layout with tags and reading time

### **Performance & Accessibility**
- Static site generation for near-instant page loads
- Optimized images and lazy loading
- Mobile-first responsive design
- WCAG AA accessible
- Perfect Lighthouse scores (target: 95+ across all metrics)

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
│   ├── components/               # React/Astro components
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
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
│   │   └── blog/[...slug].astro  # Blog posts
│   └── styles/                   # Global styles
├── astro.config.mjs              # Astro configuration
├── tailwind.config.mjs           # Tailwind + Catppuccin colors
├── .node-version                 # Node version management
└── package.json
```

## Design System

The site uses the **Catppuccin Mocha** color palette for a modern, cozy developer aesthetic:
```js
// Core colors
base: '#1e1e2e'      // Primary background
mauve: '#cba6f7'     // Primary accent (CTAs, links)
blue: '#89b4fa'      // Secondary accent (tags, buttons)
peach: '#fab387'     // Tertiary accent (emphasis)
text: '#cdd6f4'      // Primary text
```

Full color system and Tailwind configuration in `tailwind.config.mjs`.

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
- thumbnail (optional): Path to image in /public
- readTime (required): Estimated reading duration
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
<Hero client:load />           <!-- Hydrate immediately -->
<Projects client:visible />    <!-- Hydrate when visible -->
<BlogCard client:idle />       <!-- Hydrate when browser idle -->
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
    pubDate: z.date(),
    tags: z.array(z.string()),
  }),
});
```

### Syntax Highlighting
Custom Shiki theme configuration for code blocks matching the Catppuccin Mocha aesthetic.


## License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use this as inspiration for your own portfolio, but please don't copy it verbatim. Create something unique that represents you!

## Connect

- **Portfolio:** [ambalong.dev](https://ambalong.dev)
- **GitHub:** [@jambalong](https://github.com/jambalong)
- **LinkedIn:** [in/jambalong](https://linkedin.com/in/jambalong)
- **Email:** [johnalvin@ambalong.dev](mailto:johnalvin@ambalong.dev)

## Acknowledgments

- **Design Process:** Initial design and React components prototyped using [Lovable.dev](https://lovable.dev)
- **Color Palette:** [Catppuccin](https://github.com/catppuccin/catppuccin) Mocha theme for the cozy developer aesthetic
- **Framework:** [Astro](https://astro.build) for static site generation and excellent developer experience
- **UI Components:** [shadcn/ui](https://ui.shadcn.com) and [Lucide React](https://lucide.dev) for icons
- **Animations:** [Framer Motion](https://www.framer.com/motion/) for smooth interactions
- **Hosting:** Deployed on [Netlify](https://netlify.com) with continuous deployment

---

*Built with ❤️ and lots of 🍫*