/* eslint-disable prettier/prettier */
/** @format */

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,jsx,ts,tsx}"], // 사용되지 않는 클래스 제거
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
      gray: {
        500: "#2D2D2D",
        200: "#D2D2D2",
        100: "#EAEAEA",
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
        256: "256px",
        140: "140px",
        0.6: "6px",
      },
    },
  },
  variants: {},
  plugins: [],
};
