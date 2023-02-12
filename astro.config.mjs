import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

export default defineConfig({
  vite: {
    plugins: [],
    ssr: {}
  },
  integrations: [preact({ compat: true })]
});