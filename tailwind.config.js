/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'cream': '#FEF9CF',
      'primary': '#CAF4FF',
      'Secondary': '#9FDEFE',
      'main': '#5AB1FE',
      ...require('tailwindcss/colors'),
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        fredoka: ['Fredoka One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}