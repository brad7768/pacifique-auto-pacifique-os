// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Pacifique Auto — site public corporate B2B.
 * PacifiqueOS (SaaS ops) is out of scope for this app.
 */
export default defineConfig({
  site: 'https://pacifiqueauto.cm',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
