/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Libre Baskerville", "serif"],
        Inter: ["Inter", "sans-serif"]
      },

      backgroundImage: {
        'black-to-transparent': 'linear-gradient(to bottom, rgba(0, 0, 0, .55), rgba(0, 0, 0, 0))',
      }
    },
  },
  plugins: [],
}

