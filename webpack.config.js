const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const path = require('path');
const webpack = require('webpack');
const cssnano = require('cssnano');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    index: './src/pages/main/index.js',
    articles: './src/pages/articles/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      assets: path.resolve(__dirname, './src/assets'),
      images: path.resolve(__dirname, './src/assets/images'),
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.css$/i,
      use: [
        isDev ? { loader: 'style-loader' } : {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../',
          },
        },
        'css-loader',
        'postcss-loader',
      ],
    },
    {
      test: /\.(svg|png|jpe?g|gif|ico)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            esModule: false,
            name: './images/[contenthash].[ext]',
          },
        },
        {
          loader: 'image-webpack-loader',
          options: {
            disable: true,
          },
        },
      ],
    },
    {
      test: /\.(eot|ttf|woff|woff2)$/,
      loader: 'file-loader?name=./vendor/[name].[ext]',
    },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './styles/[name].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/main/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/articles/articles.html',
      filename: 'articles.html',
      chunks: ['articles'],
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
