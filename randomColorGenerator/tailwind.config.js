/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "hexColor": "#3B82F6",
        "rgbColor": "rgb(107,114,128)"
      }
    },
  },
  plugins: [],
}

