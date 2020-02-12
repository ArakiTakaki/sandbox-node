import * as Webpack from 'webpack';
import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WasmPackPlugin from '@wasm-tool/wasm-pack-plugin';

const webpack: Webpack.Configuration & { devServer: any } = {
  entry: {
    index: [path.resolve(__dirname, './src/index.ts')],
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.wasm'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.(jpg|png)$/,
        loader: "file-loader",
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('./src/index.html'),
      hash: true,
      inject: true,
    }),
    new WasmPackPlugin({
      crateDirectory: path.join(__dirname, 'rust')
    }),
  ],
  devServer: {
    contentBase: 'dist',
    port: 1234,
    host: '0.0.0.0', // 他デバイスで見たい時用
    overlay: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
      colors: true,
    },
    historyApiFallback: true,
  },
};

export default webpack;

