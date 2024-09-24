/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './views/**/*.ejs', // Include all EJS files in the views folder
    './public/**/*.html', // Include HTML files in the public folder if you have any
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

