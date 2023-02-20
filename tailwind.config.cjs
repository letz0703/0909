/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      aspectRatio:{'16/9':'16/9', '4/3':'4/3'},
      colors: {
        youtube: '#ff0000',
        brand:'#c10002'
      },
      backgroundImage: {
        banner: `url('../public/imgs/banner.jpg' )`,
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
