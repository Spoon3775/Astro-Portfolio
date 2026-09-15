// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages serves the site from https://<user>.github.io/<repo>/,
  // so Astro must know the subpath for asset URLs to resolve.
  site: 'https://spoon3775.github.io',
  base: '/Astro-Portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});