/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "IMB": ["IBM Plex Sans", "sans-serif"],
      },
      colors:{
        "backgroundDark": "#1E1E1E",
        "backgroundLight": "#F1EAE1",
        "onBackgroundDark": "#0E0B0B",
        "onBackgroundLight": "#F1EAE1",
      }
    },
  },
  plugins: [],
}

