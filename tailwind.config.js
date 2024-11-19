const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#FDA214',
        },
        secondary: {
          200: '#BCCED9',
          400: '#7191A5',
          500: '#6395B8',
          700: '#304859',
          900: '#152938',
        },
        gray: {
          50: '#FCFCFC',
          100: '#F2F2F2',
        },
      },
      fontFamily: {
        sans: ['Atkinson Hyperlegible', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
