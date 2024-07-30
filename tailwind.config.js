const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      gilroyHeavy: ['Gilroy-Heavy', 'san-serif'],
      gilroy: ['Gilroy', 'san-serif'],
    },
    duration: {
      fast: "1s",
      normal: "3s",
      slow: "5s",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@designbycode/tailwindcss-text-glitch"),
  ],
}
