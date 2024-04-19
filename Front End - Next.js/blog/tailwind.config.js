/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        'inter': 'Inter, sans-serif',
        'space_grotesk':'Space_Grotesk, sans-serif'
      },

      colors: {
        'dark-10': '#121214',
        'dark-20': '#17171A',
        'dark-30': '#202024',
        'dark-40': '#252529',
        'dark-50': '#AFABB6',
        'brand-color': '#E07B67'
      }
    },
  },
  plugins: [],
};
