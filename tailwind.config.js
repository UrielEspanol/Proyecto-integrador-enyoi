/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0f172a",
      },
      fontFamily: {
        "primary": '"Poppins", sans-serif',
        "primary-alt": '"Montserrat Alternates", sans-serif',
        "secondary": '"Merriweather", serif',
        "secondary-alt": '"Raleway", sans-serif',
      },
    },
  },
  plugins: [],
}

