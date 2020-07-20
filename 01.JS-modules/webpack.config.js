const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// prettier-ignore
const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: { 
    rules: [
      { 
        use: "babel-loader", 
        test: /\.js$/ 
      },
      {
        // Apply css-loader first => output => send to style-loader
        // Apply from right to left 
        // use: ['style-loader', 'css-loader'],
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      }
    ] 
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;
module.exports = config;
