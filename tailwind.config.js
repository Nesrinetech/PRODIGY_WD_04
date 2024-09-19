/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/**/*.{js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      height: {
        '9/12': '75%', // Custom height class
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        code: ['Source Code Pro', 'monospace'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

 