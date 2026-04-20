import designTokensConfig from './tailwind.config.design-tokens.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: designTokensConfig.theme.extend,
  },
  plugins: [],
}
