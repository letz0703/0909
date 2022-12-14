/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    "./pages/**/*.{jsx,js}",
    "./components/**/*.{js,jsx}"
  ],

  theme: {
    extend: {
      colors: {
        youtube: '#ff0000'
      }
    }
  },
  plugins: []
}
