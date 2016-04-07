import config from './config';

const { js, buildPath } = config;

const devConfig = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      js.main
    ]
  },
  output: {
    path: buildPath,
    filename: '[name].js',
    publicPath: '/bundle/'
  },
}

export default devConfig;
