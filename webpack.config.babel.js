const {resolve} = require('path')
const webpack = require('webpack')

const isProd = process.env.NODE_ENV === 'production'

const hotEntries = !isProd
  ? [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
  ]
  : []

const hotPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
]

module.exports = {
  entry: [
    ...hotEntries,
    './src/index.js',
  ],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                'react',
                ['env', {modules: false}],
              ],
              plugins: [
                'react-hot-loader/babel',
                'transform-class-properties',
                'transform-object-rest-spread',
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: isProd ? [] : hotPlugins,
  devtool: isProd ? false : 'cheap-module-eval-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true,
    openPage: '',
  },
}
