// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: ["class", '[data-mode="dark"]'],

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant("group-hover", [".group:hover &", ".group.hover &"]);
      addVariant("hover", ["&:hover", "&.hover"]);
      addVariant("active", ["&:active", "&.active"]);
    }),
  ],

  theme: {
    extend: {
      opacity: {
        muted: 0.75,
        "muted-extra": 0.15,
      },

      colors: {
        "muted-white": "hsla(0, 0%, 100%, 0.4)",
        "muted-white-extra": "hsla(0, 0%, 100%, 0.15)",

        // custom colors
        "brand-gray-1": "#f9fafb",
        "brand-gray-2": "#f6f6ef",
        "brand-gray-3": "#18181b",
        "brand-gray-4": "#27272a",
        "brand-indigo": "#5c53c9",
        "brand-amber-1": "#f6f6ef",
        "brand-amber-2": "#f2eedc",
        "brand-amber-3": "#a78306",
        "brand-orange": "#b84317",
        "brand-blue": "#2c566e",
        "brand-pink": "#8e1c41",
        "brand-green": "#024f2f",
        "brand-positive": "#037847",
        "brand-negative": "#a6204b",
        "brand-warning": "#faeae8",
      },

      typography: {
        DEFAULT: {
          css: {
            img: {
              marginTop: 0,
              marginBottom: 0,
            },
          },
        },
      },
    },
  },
};
