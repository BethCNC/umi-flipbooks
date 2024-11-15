// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neulis-sans': ['Neulis Sans', 'system-ui', 'sans-serif'],
        'neulis-cursive': ['Neulis Cursive', 'serif'],
      },
      colors: {
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
      }
    },
  },
  plugins: [],
}