module.exports = {
  module: {
    rules: [
      // Transform ES6 with Babel
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
};
