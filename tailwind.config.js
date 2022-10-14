/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-black': '#181818',
        'the-orange':'#E5760C',
        'light-orange':'#ed8320',
      },
    }
  },
  plugins: [],
}