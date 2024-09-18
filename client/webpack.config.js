const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Progressive Web Application',
      }),
      new WebpackPwaManifest({
        name: 'PWA Text Editor',
        short_name: 'PWA',
        description: 'Just Another Text Editor',
        start_url: './',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#317EFB',
        fingerprints: false,
        publicPath: "./",
        icons: [
          {
            src: path.resolve('./src/images/logo.png'),
            sizes: [96, 192, 512],
            destination: path.join('assets', 'icons'),
            type: 'image/png'
          },
        ],
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },  
      ],
    },
  };
};
