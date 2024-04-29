/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-color': '#00DF5E',
        'dark-scale': {
          100: '#171717',
          200: '#212121',
          300: '#333333',
          400: '#828282',
          500: '#F9F9F9',
        }
      },

      fontFamily: {
        'dmSans': 'DM Sans, Arial, sans-serif'
      },

      backgroundImage: {
        'hero-pattern': "url('./ilustration.svg')",
      }
    },
  },
  plugins: [],
}

