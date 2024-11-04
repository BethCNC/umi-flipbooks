// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primitive Colors
        "umi-peace-green": {
          50: "rgba(236, 242, 233, 1)",
          100: "rgba(223, 234, 218, 1)",
          200: "rgba(207, 223, 199, 1)",
          300: "rgba(191, 212, 180, 1)",
          400: "rgba(175, 202, 162, 1)",
          500: "rgba(159, 191, 143, 1)",
          600: "rgba(132, 159, 119, 1)",
          700: "rgba(106, 127, 95, 1)",
          800: "rgba(80, 96, 72, 1)",
          900: "rgba(53, 64, 48, 1)",
          950: "rgba(32, 38, 29, 1)",
        },
        "umi-rest-navy": {
          50: "rgba(210, 213, 217, 1)",
          100: "rgba(180, 185, 191, 1)",
          200: "rgba(142, 150, 159, 1)",
          300: "rgba(104, 116, 128, 1)",
          400: "rgba(67, 81, 96, 1)",
          500: "rgba(29, 46, 64, 1)",
          600: "rgba(24, 38, 53, 1)",
          700: "rgba(19, 31, 43, 1)",
          800: "rgba(15, 23, 32, 1)",
          900: "rgba(10, 15, 21, 1)",
          950: "rgba(6, 9, 13, 1)",
        },
        "umi-calm-blue": {
          25: "rgba(237, 242, 242, 1)",
          50: "rgba(231, 241, 242, 1)",
          100: "rgba(215, 232, 234, 1)",
          200: "rgba(194, 220, 223, 1)",
          300: "rgba(174, 209, 212, 1)",
          400: "rgba(154, 197, 202, 1)",
          500: "rgba(134, 186, 191, 1)",
          600: "rgba(112, 155, 159, 1)",
          700: "rgba(89, 124, 127, 1)",
          800: "rgba(67, 93, 96, 1)",
          900: "rgba(45, 62, 64, 1)",
          950: "rgba(27, 37, 38, 1)",
        },
        
        // Semantic Colors
        surface: {
          default: "var(--neutral-white)",
          neutral: "var(--neutral-default)",
          selected: "var(--primary-200)",
          disabled: "var(--neutral-600)",
          "action-light": "var(--primary-50)",
        },
        text: {
          headings: "var(--colors-umi-neutral-black)",
          body: "var(--colors-umi-neutral-950)",
          "brand-primary": "var(--colors-umi-rest-navy-500)",
          "on-dark": "var(--colors-umi-neutral-white)",
          neutral: "var(--colors-umi-neutral-500)",
          disabled: "var(--colors-umi-neutral-700)",
          "disabled-dark": "var(--neutral-800)",
          "disabled-light": "var(--colors-umi-neutral-600)",
        },
      },
      fontFamily: {
        neulisSans: ["Neulis Sans", ...fontFamily.sans],
        neulisCursive: ["Neulis Cursive", ...fontFamily.serif],
      },
      fontSize: {
        // Based on your typography tokens
        "heading-1": ["60px", { lineHeight: "78px", fontWeight: "600" }],
        "heading-2": ["48px", { lineHeight: "54px", fontWeight: "600" }],
        "heading-3": ["40px", { lineHeight: "48px", fontWeight: "600" }],
        "heading-4": ["32px", { lineHeight: "38px", fontWeight: "600" }],
        "heading-5": ["24px", { lineHeight: "28px", fontWeight: "600" }],
        body: ["16px", { lineHeight: "20px", fontWeight: "400" }],
        "body-small": ["14px", { lineHeight: "18px", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "16px", fontWeight: "400" }],
      },
      spacing: {
        // Adding some common spacing values
        0.5: "0.125rem",
        1.5: "0.375rem",
        2.5: "0.625rem",
        3.5: "0.875rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}