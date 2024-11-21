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
      },
      spacing: {
        'layout-margins': 'var(--layout-margins)',
        'layout-gutter': 'var(--layout-gutter)',
        'layout-margins-mx': 'var(--layout-margins-mx)',
        'layout-margins-my': 'var(--layout-margins-my)',
        'layout-hero-space-between': 'var(--layout-hero-space-between)',
        'layout-hero-max-width-tagline': 'var(--layout-hero-max-width-tagline)',
        'layout-hero-logo-width': 'var(--layout-hero-logo-width)',
      },
      borderRadius: {
        'radius-l': 'var(--radius-l)',
      },
      fontSize: {
        // 9XL variants
        '9xl-thin': ['var(--text-9-x-l--thin)', 'var(--text-9-x-l--line-height)'],
        '9xl-extralight': ['var(--text-9-x-l--extra-light)', 'var(--text-9-x-l--line-height)'],
        '9xl-light': ['var(--text-9-x-l--light)', 'var(--text-9-x-l--line-height)'],
        '9xl-regular': ['var(--text-9-x-l--regular)', 'var(--text-9-x-l--line-height)'],
        '9xl-medium': ['var(--text-9-x-l--medium)', 'var(--text-9-x-l--line-height)'],
        '9xl-semibold': ['var(--text-9-x-l--semi-bold)', 'var(--text-9-x-l--line-height)'],
        '9xl-bold': ['var(--text-9-x-l--bold)', 'var(--text-9-x-l--line-height)'],
        '9xl-extrabold': ['var(--text-9-x-l--extra-bold)', 'var(--text-9-x-l--line-height)'],
        '9xl-black': ['var(--text-9-x-l--black)', 'var(--text-9-x-l--line-height)'],
        
        // 8XL variants
        '8xl-thin': ['var(--text-8-x-l--thin)', 'var(--text-8-x-l--line-height)'],
        '8xl-extralight': ['var(--text-8-x-l--extra-light)', 'var(--text-8-x-l--line-height)'],
        '8xl-light': ['var(--text-8-x-l--light)', 'var(--text-8-x-l--line-height)'],
        '8xl-regular': ['var(--text-8-x-l--regular)', 'var(--text-8-x-l--line-height)'],
        '8xl-medium': ['var(--text-8-x-l--medium)', 'var(--text-8-x-l--line-height)'],
        '8xl-semibold': ['var(--text-8-x-l--semi-bold)', 'var(--text-8-x-l--line-height)'],
        '8xl-bold': ['var(--text-8-x-l--bold)', 'var(--text-8-x-l--line-height)'],
        '8xl-extrabold': ['var(--text-8-x-l--extra-bold)', 'var(--text-8-x-l--line-height)'],
        '8xl-black': ['var(--text-8-x-l--black)', 'var(--text-8-x-l--line-height)'],
        
        // 6XL variants
        '6xl-thin': ['var(--text-6-x-l--thin)', 'var(--text-6-x-l--line-height)'],
        '6xl-extralight': ['var(--text-6-x-l--extra-light)', 'var(--text-6-x-l--line-height)'],
        '6xl-light': ['var(--text-6-x-l--light)', 'var(--text-6-x-l--line-height)'],
        '6xl-regular': ['var(--text-6-x-l--regular)', 'var(--text-6-x-l--line-height)'],
        '6xl-medium': ['var(--text-6-x-l--medium)', 'var(--text-6-x-l--line-height)'],
        '6xl-semibold': ['var(--text-6-x-l--semi-bold)', 'var(--text-6-x-l--line-height)'],
        '6xl-bold': ['var(--text-6-x-l--bold)', 'var(--text-6-x-l--line-height)'],
        '6xl-extrabold': ['var(--text-6-x-l--extra-bold)', 'var(--text-6-x-l--line-height)'],
        '6xl-black': ['var(--text-6-x-l--black)', 'var(--text-6-x-l--line-height)'],
        
        // XS variants
        'xs-thin': ['var(--text-xs--thin)', 'var(--text-xs--line-height)'],
        'xs-extralight': ['var(--text-xs--extra-light)', 'var(--text-xs--line-height)'],
        'xs-light': ['var(--text-xs--light)', 'var(--text-xs--line-height)'],
        'xs-regular': ['var(--text-xs--regular)', 'var(--text-xs--line-height)'],
        'xs-medium': ['var(--text-xs--medium)', 'var(--text-xs--line-height)'],
        'xs-semibold': ['var(--text-xs--semi-bold)', 'var(--text-xs--line-height)'],
        'xs-bold': ['var(--text-xs--bold)', 'var(--text-xs--line-height)'],
        'xs-extrabold': ['var(--text-xs--extra-bold)', 'var(--text-xs--line-height)'],
        'xs-black': ['var(--text-xs--black)', 'var(--text-xs--line-height)'],
      },
      lineHeight: {
        '9xl': 'var(--text-9-x-l--line-height)',
        '8xl': 'var(--text-8-x-l--line-height)',
        '6xl': 'var(--text-6-x-l--line-height)',
        'xs': 'var(--text-xs--line-height)',
      },
      backdropBlur: {
        'glass': 'var(--glass-card-blur)',
      },
      opacity: {
        'glass': 'var(--glass-card-opacity)',
      },
    },
  },
  plugins: [],
}