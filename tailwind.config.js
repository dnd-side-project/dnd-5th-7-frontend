/** @format */

module.exports = {
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // 사용되지 않는 클래스 제거
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: "607px",
    },
    colors: {
      gray: {
        500: "#2D2D2D",
      },
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
