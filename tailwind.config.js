/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
    "./src/Layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        leftmenu: "275px",
      },
      screens: {
        mobile: "375px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1440px",
        "2k": "2560px",
        "4k": "3840px",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: [
      {
        dormi: {
          primary: "#FF79C6",
          secondary: "#BD93F9",
          tertiary: "#8BE9FD",
          accent: "#50FA7B",
          error: "#FF5555",
          info: "#BD93F9",
          "base-100": "#1d0c33",
          "base-200": "#190b2b",
          "base-300": "#0e5c6f",
          "base-400": "#8BE9FD",
          "base-content": "#a8edea",
        },
      },
      "lofi",
      "dark",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};
