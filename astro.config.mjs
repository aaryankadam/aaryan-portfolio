// @ts-check
import { defineConfig } from 'astro/config';

// Repo is aaryan-portfolio, so it is served from a subpath of the user site.
export default defineConfig({
  site: 'https://aaryankadam.github.io',
  base: '/aaryan-portfolio',
});
