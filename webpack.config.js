module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: "file-loader", // `vue-svg` for webpack 1.x
        use: ["vue-loader", "vue-svg-loader"],
      },
    ],
  },
};
