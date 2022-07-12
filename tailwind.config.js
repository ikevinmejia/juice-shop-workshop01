/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: [
    "./public/index.html",
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}",
],
  theme: {
    extend: {
      backgroundImage : {
        'hamburguer' : "url('../img/hamburguer.png')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary':"#FF7E20",
        'secondary': "#FFDE5A",
        'titles':"#060922",
        'text':"#333232",
        'fondo' : "rgba(255,126,32,0.08)",
        'bg-cards' : "#FFFFFF",
        'dark-bg' : "#24202A"

      }),
      textColor: {
        'primary':"#FF7E20",
        'titles':"#060922",
        'text':"#333232",
        'fondo' : "rgba(255,126,32,0.08)",
        'bg-cards' : "#FFFFFF",
        'dark-bg' : "#24202A",
        'dark-text' : "#ACACAC"
      },
      screens : {
        'mm' : '425px',
      },
      colors: {
        'primary':"#FF7E20",
        'titles':"#060922",
        'text':"#333232",
        'fondo' : "rgba(255,126,32,0.08)",
        'bg-cards' : "#FFFFFF",
        'dark-bg' : "#24202A",
        'dark-text' : "#ACACAC"
      },
      fontSize:{
        xl4: '40px'
      },
      height:{
        "100": "500px"
      }
    },
  },
  plugins: [],
}
