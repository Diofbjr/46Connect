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
    },
  },
  variants: {},
  plugins: [],
}

