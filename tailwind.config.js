// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,jsx}',
    './index.html',
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
      },
      aspectRatio: {
        '16/9': '16 / 9',
      },
    },
  },
  plugins: [],
}