import webpack from 'webpack'
import fs from 'fs-extra'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import PurifyCSSPlugin from 'purifycss-webpack'
import glob from 'glob'
import { getIfUtils, removeEmpty } from 'webpack-config-utils'
import pkg from './package.json'

const { ifProduction, ifDevelopment } = getIfUtils(process.env.NODE_ENV)
const production = (process.env.NODE_ENV === 'production')

const DEV_SERVER_PORT = 3000
const PUBLIC_PATH = '/'
const OUTPUT_PATH = path.join(__dirname, 'build')

if (production) {
  fs.ensureDirSync(OUTPUT_PATH)
  fs.writeJSONSync(`${OUTPUT_PATH}/package.json`, pkg)
}

module.exports = {
  devtool: ifDevelopment('source-map', 'cheap-module-source-map'),

  entry: removeEmpty([
    ...ifDevelopment([
      'react-hot-loader/patch',
      `webpack-dev-server/client?http://localhost:${DEV_SERVER_PORT}`,
      'webpack/hot/only-dev-server',
    ]),
    './src/index.js',
  ]),

  output: {
    filename: `main${(production ? '.min.js' : '.js')}`,
    path: OUTPUT_PATH,
    publicPath: ifDevelopment(PUBLIC_PATH, ''),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ifDevelopment(['babel-loader'], ['babel-loader', 'eslint-loader']),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: { plugins: () => ifProduction([require('autoprefixer')], []) },
            },
          ],
        }),
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/,
          /\.svg$/,
        ],
        use: ['file-loader'],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [{
          loader: 'url-loader',
          options: { limit: 10000 },
        }],
      },
      {
        test: /.*\.svg$/,
        use: [
          'file-loader',
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { convertColors: { shorthex: false } },
                { convertPathData: false },
              ],
            },
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      components: path.join(__dirname, '/src/components'),
      utils: path.join(__dirname, '/src/utils'),
      actions: path.join(__dirname, '/src/redux/actions.js'),
      assets: path.join(__dirname, '/src/assets'),
    },
  },

  plugins: removeEmpty([
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'src/index.html'),
      env: production ? 'production' : 'development',
    }),
    new ExtractTextPlugin({
      filename: production ? '[name].min.css' : '[name].css',
      disable: false,
      allChunks: true,
    }),
    ...ifDevelopment([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ]),
    ...ifProduction([
      new PurifyCSSPlugin({
        paths: glob.sync(path.join(__dirname, 'src/**'), { nodir: true }),
        verbose: true,
        minimize: true,
        styleExtensions: ['.css'],
        moduleExtensions: ['.html'],
        purifyOptions: { minify: true },
      }),
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
      new webpack.optimize.AggressiveMergingPlugin(),
    ]),
  ]),

  devServer: {
    hot: true,
    port: DEV_SERVER_PORT,
    publicPath: PUBLIC_PATH,
    disableHostCheck: true,
    historyApiFallback: true,
  },
}
