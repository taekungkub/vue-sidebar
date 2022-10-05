/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      // adding xs to the rest
      // if you did not add this, you would have only "xs"
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
