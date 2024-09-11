/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      'tablet': '870px',
    },
  },
  plugins: [daisyui],
}

