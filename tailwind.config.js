/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#1B2A4A', dark: '#0F1A2E', light: '#243b5e' },
        teal: { DEFAULT: '#2A9D8F', dark: '#1e7a6f', light: '#3ab5a5' },
        gold: { DEFAULT: '#E9C46A', dark: '#d4a843', light: '#f0d48a' },
        cream: '#F8FAFB',
      },
      fontFamily: {
        display: ['"Outfit"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
