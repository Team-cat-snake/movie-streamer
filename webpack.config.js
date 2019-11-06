const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  devServer: {
    proxy:{
      context: ["/", "/movie"],
      target: 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, '/src'),
    publicPath: 'http://localhost:8080/dist'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg|ico)$/,
        use: [
          {
            // loads files as base64 encoded data url if image file is less than set limit
            loader: "url-loader",
            options: {
              // if file is greater than the limit (bytes), file-loader is used as fallback
              limit: 90000
            }
          }
        ]
      }
    ]
  }
}