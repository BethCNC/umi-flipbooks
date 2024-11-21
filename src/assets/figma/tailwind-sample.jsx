/** @type {import('tailwindcss').Config} */
module.exports = {
    "content": [
          "./src/**/*.{js,jsx,ts,tsx}"
    ],
    "theme": {
          "extend": {
                "colors": {
                      "white": "#fff",
                      "surface-secondary-action": "#1e293b",
                      "text-neutral": "#f7f0e8",
                      "gray": {
                            "100": "rgba(255, 255, 255, 0.2)",
                            "200": "rgba(255, 255, 255, 0)"
                      },
                      "border-on-secondary": "#f8fafc",
                      "surface-success": "#bfd4b4",
                      "text-headings": "#030303",
                      "lavenderblush": "#f6dce9"
                },
                "spacing": {
                      "layout-breakpoint": "1280px",
                      "layout-margins-mx": "80px",
                      "layout-margins-my": "80px",
                      "padding-p-6-24": "24px",
                      "layout-space-between": "24px",
                      "spacing-16-64": "64px",
                      "layout-flipbook-padding-space-between": "8px",
                      "layout-flipbook-padding-": "16px",
                      "layout-flipbook-padding-py": "12px",
                      "spacing-1-4": "4px",
                      "padding-p-4-16": "16px",
                      "padding-p-2-8": "8px",
                      "layout-icon-size": "24px",
                      "padding-p-0-5-2": "2px",
                      "spacing-6-24": "24px",
                      "max-width-6xl-1152": "1152px",
                      "padding-p-1-4": "4px",
                      "padding-p-1-5-6": "6px",
                      "padding-p-3-12": "12px",
                      "padding-p-10-40": "40px",
                      "padding-p-5-20": "20px",
                      "gap-gap-10": "40px"
                },
                "fontFamily": {
                      "text-base-regular": "'Neulis Sans'",
                      "neulis-cursive": "'Neulis Cursive'"
                },
                "borderRadius": {
                      "980xl": "999px",
                      "xl": "20px",
                      "border-radius-full": "999px",
                      "border-radius-xl": "20px",
                      "radius": "8px",
                      "radius-s": "8px",
                      "border-radius-default": "12px",
                      "border-radius-md": "12px",
                      "border-radius-sm": "8px",
                      "border-radius-3xl": "28px"
                }
          },
          "fontSize": {
                "base": "16px",
                "xl": "20px",
                "17xl": "36px",
                "109xl": "128px",
                "inherit": "inherit"
          }
    },
    "corePlugins": {
          "preflight": false
    }
}