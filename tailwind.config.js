/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '19': 'repeat(19, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}

