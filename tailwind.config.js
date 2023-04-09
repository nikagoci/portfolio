/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#64ffda',
        slate: '#8892b0',
        lightslate: '#ccd6f6',
        lightgreen: 'rgba(100,255,218,0.1)'
      }
    },
  },
  plugins: [],
}
