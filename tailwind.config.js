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
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: ["winter"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};
