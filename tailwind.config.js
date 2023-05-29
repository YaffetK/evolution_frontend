/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#4a52c4",
        lblue: "#54c0cf",
        grey: "#D9D9D9",
        grays: "#d3cecf",
        yellows: "#E8E337",
        dgray: "#1E1E1E",
        white: "#EFEFEF",
      },
    },
  },
  plugins: [],
};
