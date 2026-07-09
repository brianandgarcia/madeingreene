// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Utility/internal pages kept out of the sitemap and search index.
const EXCLUDE = ['/estimate/', '/thank-you/', '/quote/', '/vs-godaddy/'];

// https://astro.build/config
export default defineConfig({
  site: 'https://madeingreene.com',
  integrations: [
    sitemap({
      filter: (page) => !EXCLUDE.some((path) => page.endsWith(path)),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});