/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'base': '#FCDDD4',
        'font-base':'#4B1313',
        'linear':'#b62b2b',
        'footer':'#B62B2B',
        'button':'#FFB9AD',
        'liness':'F1797C'
      },
      fontFamily:{
        'mother-nature':'mother-nature-regular, sans-serif',
        'cantora':'Cantora One, sans-serif;'
      }

    },
  },
  plugins: [],
}
