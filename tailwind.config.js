/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#294b77" /*rgba(17, 23, 40, 1)*/,
        secondary: "#111728" /*rgba(41, 75, 119, 1)*/,
        ligth: "#8397a7" /*rgba(131, 151, 167, 1)*/,
        text: "#ddddbd" /*rgba(221, 221, 189, 1)*/,
        red: "#bb0a01" /*rgba(187, 10, 1, .8)*/,
        orange: "#f7ad0e" /*rgba(221, 221, 189, 1)*/,
        green: "#06ec38",
      },
      boxShadow: {
        white: "0px 0px 8px 4px rgba(131, 151, 167, 0.7)",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
