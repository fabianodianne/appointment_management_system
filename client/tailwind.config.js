/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'sans': ['Dongle', 'sans-serif'],
        'sans': ['Poppins', 'sans-serif']
      },
      colors: {
        offWhite: '#F2FBFF',
        darkText: '#404258',
        primary: '#6574D7',
        primaryHover: '#5762AA',
        secondary: '#8DB3E2',
        secondaryHover: '#6498d8',
        accentGreen: '#3CCDA4',
        accentGreenDarker: '##2CAA87'
      },
      fontSize: {
        'title': '2rem',
        'body': '1.125rem',
        'body-bold': '1.125rem',
        'small': '0.875rem',
      }

    },
  },
  plugins: [],
}