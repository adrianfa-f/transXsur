/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e5939", // verde oscuro
        secondary: "#44aa56", // verde claro
        accent: "#317a45", // tono intermedio
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
