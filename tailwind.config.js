/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce-gentle': 'bounce 1.5s infinite',
      },
    },
  },
  plugins: [],
};