/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      height:{
        "10vh":"10vh",
        "90vh":"90vh"
      }
    },
  },
  plugins: [],
}