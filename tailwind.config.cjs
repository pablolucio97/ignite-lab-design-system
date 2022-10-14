/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    colors: {
      transparent: 'transparent',

      white100: '#FFFFFF',
      white800: '#E0E0E0',
      
      gray700: '#7C7C8A',
      gray800: '#555555',

      black100: '#3A3A3A',
      black500: '#2F2D2D',

      cyan300: '#9DECF1',
      cyan500: '#61DAFB'
    },
    fontSizes: {
      xs: 14, sm: 16, md: 18, lg: 20, xl: 24, '2xl': 32
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
