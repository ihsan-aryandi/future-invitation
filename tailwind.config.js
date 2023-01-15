/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          "900": '#d55b3e',
          "800": '#e06143'
        },
        greenblue: '#00AAA0',
        skin: '#FCF4D9'
      }
    }
  },
  plugins: [],
}
