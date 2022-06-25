/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
        colors: {
            sandTan: '#E1B382',
            sandTanShadow: '#C89666',
            sandTanDark: '#604934',
            nightBlue: '#2D545E',
            nightBlueShadow: '#12343B',
            darkVanilla: '#DEC0AA',
            white: '#FFFFFF',
        },
        fontFamily: {
            'poppins' : ["'Poppins'", 'sans-serfi']
        },
    },
  },
  plugins: [],
}
