import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config

export default defineConfig({
  site: "https://www.my-site.dev",
  integrations: [vue(), tailwind(), react()],
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: "directory",
  },
});
