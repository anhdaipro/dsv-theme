/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#fcbf10',
        secondary: '#191e26',
        'primary-95': '#FFF6DE',
        'neutral-40': '#677282',
        'neutral-30': '#515A69',
      },
      fontFamily: {
        'bricolage-grotesque': ['Bricolage Grotesque'],
        'noto-sans': ['Noto Sans'],
      },
      boxShadow: {
        custom: ['2px 6px 16px rgba(0, 0, 0, 0.25)'],
        header: ['2px 2px 4px rgba(25, 30, 38, 0.15)'],
      },
    },
  },
  plugins: [],
};
