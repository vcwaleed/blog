const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tech:"rgb(246, 248, 255)",
        techblue:"rgb(104,131,251)",
        lightgray:"rgb(95,96,106)",
        backgroundcolor:"rgb(24,26,42)",
        bannercolor:"rgb(36,37,53)",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
