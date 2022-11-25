/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-light': "url('/src/assets/images/bg-desktop-light.jpg')",
        'desktop-dark': "url('/src/assets/images/bg-desktop-dark.jpg')",
        'mobile-light': "url('/src/assets/images/BG-MOBILE-LIGHT.jpg')",
        'mobile-dark': "url('/src/assets/images/BG-MOBILE-DARK.jpg')",
        'moon-icon': "url('/src/assets/images/ICON-MOON.SVG')",
        'sun-icon': "url('/src/assets/images/ICON-SUN.SVG')",
      }
    },
  },
  plugins: [],

  darkMode:'class'
}
