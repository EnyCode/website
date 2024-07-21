import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';
import mdx from "@astrojs/mdx";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  output: "hybrid",
  adapter: node({mode: 'standalone'})
});
