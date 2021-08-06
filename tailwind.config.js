/** @format */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // 사용되지 않는 클래스 제거
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      "4xl": [
        "36px",
        {
          letterSpacing: " -0.02em",
          lineHeight: "44px",
        },
      ],
    },
    screens: {
      md: "607px",
    },
    colors: {
      gray500: "#2D2D2D",
      gray400: "#6c6c6c",
      gray300: "#949494",
      gray200: "#d2d2d2",
      gray100: "#eaeaea",
      orange: "#fa7449",
      yellow: " #FFD74A",
      green: "#71D76F",
      blue: "#5E72FF",
      pink: "#F0A7E7",
      yellow_deep: "#AC9648",
      black: "#000000",
      black_dim: "rgba(0, 0, 0, 0.6)",
      bg: "#f9f9f9",
      white: colors.white,
    },
    textColor: {
      gray500: "#2D2D2D",
    },
    extend: {
      spacing: {
        360: "360px",
      },
    },
  },
  variants: {},
  plugins: [],
};
