/* eslint-disable prettier/prettier */
/** @format */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./public/index.html", "./src/**/*.{vue,js,jsx,ts,tsx}"], // 사용되지 않는 클래스 제거
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      bold: ["Pretendard-Bold"],
      medium: ["Pretendard-Medium"],
      semibold: ["Pretendard-SemiBold"],
      regular: ["Pretendard-Regular"],
    },
    fontSize: {
      "4xl": [
        "36px",
        {
          letterSpacing: " -0.02em",
          lineHeight: "44px",
        },
      ],
      14: [
        "14px",
        {
          lineHeight: "20px",
        },
      ],
      13: [
        "13px",
        {
          lineHeight: "18px",
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
      gray200: "#D2D2D2",
    },
    borderColor: {
      gray500: "#2D2D2D",
    },
    extend: {
      spacing: {
        360: "360px",
        256: "256px",
        140: "140px",
        0.6: "6px",
      },
    },
  },
  variants: {},
  plugins: [],
};
