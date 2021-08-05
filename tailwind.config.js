/* eslint-disable prettier/prettier */
/** @format */

module.exports = {
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // 사용되지 않는 클래스 제거
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
    },
    screens: {
      md: "607px",
    },
    colors: {
      gray: {
        500: "#2D2D2D",
        200: "#D2D2D2",
      },
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
      },
    },
  },
  variants: {},
  plugins: [],
};
