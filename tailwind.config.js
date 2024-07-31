/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}" ,
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sedan: [ 'Sedan Sc', 'swap'],
        space: [ 'Space Grotesk', 'swap' ],
        inter: ['Inter', 'swap'],
      },
    },
  },
  plugins: [],
}

