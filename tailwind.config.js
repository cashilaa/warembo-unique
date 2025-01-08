/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#14B8A6',
        'secondary': '#0F766E',
        'accent': '#F97316',
        'background': '#F8FAFC',
      },
    },
  },
  plugins: [],
}
