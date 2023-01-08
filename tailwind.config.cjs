/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      boxShadow:{
        "shadow-card": "0px -5px 6px rgb(0 0 0 / 10%), 0px 2px 2px rgba(0,0,0, 10%)"
      }
    },
  },
  plugins: [],
}
