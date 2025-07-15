/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        avantDemi: ['"AvantGardeDemi"', 'sans-serif'],
        avantBook: ['"AvantGardeBook"', 'sans-serif'],
        avantBookOblique: ['"AvantGardeBookOblique"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
