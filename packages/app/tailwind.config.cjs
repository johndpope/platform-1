// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    plugin(({ addVariant }) => {
      addVariant("group-hover", [".group:hover &", ".group.hover &"]);
      addVariant("hover", ["&:hover", "&.hover"]);
      addVariant("active", ["&:active", "&.active"]);
    }),
  ],

  daisyui: {
    themes: ["light", "business"],
    logs: false,
  },

  theme: {
    extend: {
      opacity: {
        muted: 0.75,
        "muted-extra": 0.15,
      },

      colors: {
        "muted-white": "hsla(0, 0%, 100%, 0.4)",
        "muted-white-extra": "hsla(0, 0%, 100%, 0.15)",
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
