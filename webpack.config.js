const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const buildDate = new Date().toISOString(); 
const pageURL = "https://inside-corona.angst-frei.ch";

module.exports = {
  mode: 'production',
  entry: {
    main: {
      import: './src/index.js'
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
    assetModuleFilename: 'img/[name][ext][query]'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new FaviconsWebpackPlugin({
      logo: './src/graph.png',
      prefix: 'favicons/',
    }),
    new HtmlWebpackPlugin({
      buildDate: buildDate,
      pageURL: pageURL,
      scriptLoading: 'blocking',
      inject: 'body',
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/img", to: "img" },
        { from: "src/json", to: "json" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource"
      },
    ]
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      '...',
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
};
