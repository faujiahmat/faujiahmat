/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'smooth-green': '#06C089',
        'white-green': '#E2FFF6'
      },
    },
  },
  plugins: [],
};
