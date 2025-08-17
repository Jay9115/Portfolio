/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'xs': '0.68rem',      // ~11px (was 12px)
        'sm': '0.77rem',      // ~12px (was 14px)  
        'base': '0.9rem',     // ~14px (was 16px)
        'lg': '1.02rem',      // ~16px (was 18px)
        'xl': '1.125rem',     // ~18px (was 20px)
        '2xl': '1.35rem',     // ~22px (was 24px)
        '3xl': '1.7rem',      // ~27px (was 30px)
        '4xl': '2.025rem',    // ~32px (was 36px)
        '5xl': '2.7rem',      // ~43px (was 48px)
        '6xl': '3.375rem',    // ~54px (was 60px)
        '7xl': '4.05rem',     // ~65px (was 72px)
        '8xl': '5.4rem',      // ~86px (was 96px)
        '9xl': '7.2rem',      // ~115px (was 128px)
      }
    },
  },
  plugins: [],
};
