/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "grey-90": "#333333",
      "grey-50": "#444444",
      "grey-45": "#555555",
      "grey-30": "#666666",
      "grey-20": "#999999",
      black: "#000",
      white: "#fff",
    },
    extend: {
      textColor: {
        DEFAULT: "#fff", // Sets default text color to white
      },
    },
  },
  plugins: [],
};
