/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        warmIvory: '#FDFBF7',
        softBeige: '#F5EFE6',
        sageLight: '#E8EFE9',
        sageMedium: '#A3B899',
        sageDark: '#3A4F3F',
        accentGold: '#C29B70',
        accentGoldDark: '#A88056'
      }
    }
  },
  plugins: [],
}
