/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primaryText: '#f5f5f5',
        primaryButton: '#2975CC',
      },

      backgroundColor: {
        'custom': '#2975CC',
      },
      fontSize: {
        'custom-h1': ['2.25rem', '2.5rem', '3rem', '3.5rem', '4rem'],
      },
      spacing: {
        'custom-pt-h1': '3rem',
        'custom-pb-h1': '6rem',
      },
      width: {
        'custom-w-h1': ['5/6', '3/5', '2/3', '1/2', '2/4'],
      },
    },
  },
  variants: {},
  plugins: [],
}
