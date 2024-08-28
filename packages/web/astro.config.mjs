import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://cazcik.com',
  trailingSlash: "never",
  integrations: [tailwind({ applyBaseStyles: false})]
});