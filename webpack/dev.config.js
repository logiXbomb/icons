import config from './config';
import webpack from 'webpack';

const { js, buildPath } = config;

const devConfig = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      js.main
    ]
  },
  output: {
    path: buildPath,
    filename: '[name].js',
    publicPath: '/bundle/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'react-hot!babel',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': { NODE_ENV: '"development"' }
    // })
  ]
}

export default devConfig;
