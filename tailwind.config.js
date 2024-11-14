/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "rgba(255, 255, 255, 0.35)",
        "text-secondary": "#0f172a",
        black: "#000",
      },
      spacing: {
        "layout-breakpoint": "1280px",
        "layout-margins-mx": "80px",
        "layout-margins-my": "80px",
        "layout-hero-space-between": "64px",
        "layout-hero-max-width-tagline": "467px",
        "layout-space-between": "24px",
      },
      fontFamily: {
        "neulis-cursive": "'Neulis Cursive'",
      },
      borderRadius: {
        "radius-l": "16px",
      },
    },
    fontSize: {
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
