// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import typography from "@tailwindcss/typography";

// https://astro.build/config
export default defineConfig({
  site: "https://shuva.dev",
  base: "/",
  output: "static",
  vite: {
    plugins: [tailwindcss()]
  }
});