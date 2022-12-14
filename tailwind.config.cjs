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
      aspectRatio:{'16/9':'16/9', '4/3':'4/3'},
      colors: {
        youtube: '#ff0000',
        brand:'#c10002'
      },
      backgroundImage: {
        banner: `url('../images/banner.jpg' )`,
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
