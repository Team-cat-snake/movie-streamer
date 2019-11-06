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
      context: ['/', '/movie', '/favs'],
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
            loader: "url-loader",
            options: {
              limit: 90000
            }
          }
        ]
      }
    ]
  },
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
}