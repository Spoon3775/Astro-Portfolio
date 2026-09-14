# Developer Portfolio

A modern, responsive single-page portfolio built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

## Features

- ⚡ Static, fast, SEO-friendly single-page site
- 📱 Fully responsive with mobile navigation menu
- 🧩 Sections: Hero, About, Projects, Skills, Contact
- 🎨 Dark theme with Tailwind CSS
- 🔧 Zero-JS by default (one small script for the mobile menu)

## Getting started

```bash
npm install
npm run dev      # start dev server at http://localhost:4321
npm run build    # build static site to ./dist
npm run preview  # preview the production build
```

## Customization

All content lives in [`src/config.ts`](src/config.ts) — edit these to make it yours:

- `SITE` — your name, site title, description, URL
- `SOCIALS` — GitHub, LinkedIn, and email links
- `PROJECTS` — your projects (title, description, tags, GitHub/demo links)
- `SKILLS` — skill categories and items

Also update the about text in `src/components/About.astro` and the hero tagline in `src/components/Hero.astro`.

## Deployment

The site builds to static files in `dist/`, deployable to:

- **GitHub Pages** — use the official [withastro/action](https://github.com/withastro/action) GitHub Action
- **Vercel / Netlify** — connect the repo; the Astro adapter is auto-detected

## Project structure

```
src/
├── components/   # Hero, About, Projects, Skills, Contact, Header, Footer
├── layouts/      # BaseLayout (HTML shell, meta tags, global styles)
├── pages/        # index.astro
└── config.ts     # All editable content and links
```