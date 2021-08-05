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
      gray: {
        500: "#2D2D2D",
      },
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
