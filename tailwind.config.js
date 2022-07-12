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
        'primary':"#23F3DF",
        'secondary': "#FFDE5A",
        'tercero' : "#FF5858",
        'titles':"#24202A",
        'text':"#ACACAC",
        'fondo' : "#FAFAFA",
        'bg-cards' : "#FFFFFF",
        'dark-bg' : "#24202A"

      }),
      textColor: {
        'primary':"#23F3DF",
        'secondary': "#FFDE5A",
        'tercero' : "#FF5858",
        'titles':"#24202A",
        'text':"#ACACAC",
        'fondo' : "#FAFAFA",
        'bg-cards' : "#FFFFFF",
        'dark-bg' : "#24202A",
        'dark-text' : "#ACACAC"
      },
      screens : {
        'mm' : '425px',
      },
      colors: {
        'primary':"#23F3DF",
        'secondary': "#FFDE5A",
        'tercero' : "#FF5858",
        'titles':"#24202A",
        'text':"#ACACAC",
        'fondo' : "#FAFAFA",
        'bg-cards' : "#FFFFFF",
        'dark-bg' : "#24202A",
        'dark-text' : "#ACACAC"
      },
    },
  },
  plugins: [],
}
