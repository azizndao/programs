const {blackA, mauve, violet} = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...mauve,
        ...violet,
      },
    },
  },
  plugins: [],
}