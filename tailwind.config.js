const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "400px",
    },
    extend: {
      fontFamily: {
        uncut: ["var(--font-uncut)"],
        gems: ["var(--font-gems)"],
        humane: ["var(--font-humane)"],
      },
      colors: {
        primary: "#f0fe6e",
        secondary: "#fe3c00",
        ternary: "#9dbee2",
        fournery: "#f3ead8",
        text: {
          primary: "#f5f5f5",
          secondary: "#e3e3e3",
        },
        bg: {
          dark: "#141414",
          light: "#181818",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
