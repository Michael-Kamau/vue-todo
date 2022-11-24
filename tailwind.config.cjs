/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-light': "url('/src/assets/images/bg-desktop-dark.jpg')",
      }
    },
  },
  plugins: [],
}
