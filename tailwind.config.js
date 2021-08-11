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
      semibold: ["Pretendard-SemiBold", "Pretendard-bold"],
      regular: ["Pretendard-Regular"],
      ExtraBold: ["Pretendard-ExtraBold", "Pretendard-Bold"],
    },
    fontSize: {
      "4xl": [
        "36px",
        {
          letterSpacing: " -0.02em",
          lineHeight: "44px",
        },
      ],
      22: ["22px"],
      18: ["18px"],
      16: ["16px"],
      14: ["14px"],
      13: [
        "13px",
        {
          lineHeight: "18px",
        },
      ],
      12: [
        "12px",
        {
          lineHeight: "14.4px",
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
    boxShadow: {
      custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    },
    extend: {
      spacing: {
        360: "360px",
        300: "300px",
        256: "256px",
        140: "140px",
        0.6: "6px",
        0.8: "8px",
        56: "56px",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
