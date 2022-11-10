/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index.html'
  ],
  theme: {
    extend: {
      backgroundColor: {
        customblue: '#001428'
      },
      textColor: {
        customblue: '#001428'
      },
      height: {
        one: '1px'
      },
      width: {
        95: '95%'
      },
      maxWidth: {
        300: '300px'
      }
    },
  },
  plugins: [],
}
