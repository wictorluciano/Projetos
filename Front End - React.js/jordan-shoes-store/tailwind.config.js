/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'img_bg_hero': "url('/jordan-bg.png')",
    },

    extend: {
      fontFamily: {
        'archivo': 'Archivo, Arial, sans-serif'
      },

      colors: {
        'dark-10': '#121214',
        'dark-20': '#F3F7FF',
        'brand-color': '#7CA2F4',
        'bg-color': 'rgba(18, 18, 20, 0.75)'
      },
    },
  },
  plugins: [],
}

