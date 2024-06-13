/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: 'rgb(10, 9, 15)',
        textColor: 'rgb(239, 239, 229)',
        borderColor: 'rgb(53, 53, 57)',
      },
      fontFamily: {
        primary: ['Roboto Mono', 'sans-serif'],
        title: ['Violetsans', 'Arial', 'sans-serif'],
      },
      opacity: {
        opacity1: .6,
        opacity2: .65,
      }
    },
  },
  plugins: [],
});
