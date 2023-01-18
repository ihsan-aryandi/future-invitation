/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          "900": '#d55b3e',
          "800": '#e06143',
          "500": "#FCF4D9",
          "600": "#de9381",
          "400": "#FFFDF5"
        },
        greenblue: '#00AAA0',
        skin: '#FCF4D9'
      }
    }
  },
  plugins: [],
}
