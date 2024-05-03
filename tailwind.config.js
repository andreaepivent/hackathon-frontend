/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      montheavy: ["mont-heavy"],
    },
    extend: {
      backgroundImage: {
        light: "url('/background.png')",
        dark: "url('/Monkey-Selfie.png')",
      },
    },
  },
  plugins: [nextui()],
};
