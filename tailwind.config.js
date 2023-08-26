/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // light mode
        primary: "#2b6777",
        secondary: "#c8d8b4",
        dark: "#0C0E16",
        light: "#f3f3f3",
        danger: "rgb(228, 81, 81)",
        white: "#ffffff",
        grey: "rgb(100, 100, 100)",
        accent: "#e9a3a3",
        green: "#b1f3b6",
        darkblue: "#0e6cdf",
        blue: "#a5caf6",
        darkblue: "#0B1229",
        gray: "rgb(190, 189, 189)",
      },
    },
  },
  plugins: [],
};
