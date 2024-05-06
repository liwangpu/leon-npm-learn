const path = require('path');
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { dependencies } = require("./package.json");

const WRITE_TO_DISK = true;

module.exports = (env) => {
  return {
    mode: 'development',
    devtool: false,
    cache: true,
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    entry: {
      index: './src/main.ts',
      // index: path.resolve('src', 'main.ts'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      clean: false,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      // new webpack.HotModuleReplacementPlugin(),
    ],
  };
};