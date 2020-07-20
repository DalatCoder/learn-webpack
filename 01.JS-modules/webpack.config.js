const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// prettier-ignore
const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: 'build/'
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
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          { 
            loader: 'url-loader',
            // If images size less than 40kn, bundle it. Else create seperated file for image
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ] 
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;
