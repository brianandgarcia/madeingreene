// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Utility/internal pages kept out of the sitemap and search index.
const EXCLUDE = ['/estimate/', '/thank-you/', '/quote/', '/vs-godaddy/', '/find-your-fit/', '/og/'];

// Client proposals live under /proposal/<slug>-<token> and are never indexed.
const EXCLUDE_PREFIXES = ['/proposal/'];

// https://astro.build/config
export default defineConfig({
  site: 'https://madeingreene.com',
  // Inline the (small, ~9KB gzipped) CSS into each page's <head> so styles are
  // applied before first paint — eliminates the flash of unstyled content (FOUC).
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !EXCLUDE.some((path) => page.endsWith(path)) &&
        !EXCLUDE_PREFIXES.some((prefix) => new URL(page).pathname.startsWith(prefix)),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});