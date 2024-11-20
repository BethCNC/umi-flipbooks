// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'umi-peace-green': {
          50: 'var(--umi-peace-green-50)',
          500: 'var(--umi-peace-green-500)',
          900: 'var(--umi-peace-green-900)',
        },
        'umi-rest-navy': {
          50: 'var(--umi-rest-navy-50)',
          500: 'var(--umi-rest-navy-500)',
          900: 'var(--umi-rest-navy-900)',
        },
        'umi-calm-blue': {
          50: 'var(--umi-calm-blue-50)',
          500: 'var(--umi-calm-blue-500)',
          900: 'var(--umi-calm-blue-900)',
        },
      },
      spacing: {
        'layout': 'var(--layout-width)',
        'margins': 'var(--layout-margins)',
        'gutter': 'var(--layout-gutter)',
        'grid-gap': 'var(--layout-grid-gap)',
      },
      borderRadius: {
        's': 'var(--radius-s)',
        'm': 'var(--radius-m)',
        'l': 'var(--radius-l)',
        'xl': 'var(--radius-xl)',
        'full': 'var(--radius-full)',
      },
      fontFamily: {
        sans: ['Neulis Sans', ...fontFamily.sans],
        cursive: ['Neulis Cursive', ...fontFamily.serif],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}