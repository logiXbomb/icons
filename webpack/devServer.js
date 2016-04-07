import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackConfig from './dev.config.js';

export default () => {
  let bundleStart = null;
  const compiler = webpack(webpackConfig);

  compiler.plugin('compile', () => {
    console.log('Bundling...');
    bundleStart = Date.now();
  });

  compiler.plugin('failed', (err) => {
    console.log('AN ERROR', err);
  });

  compiler.plugin('done', () => {
    console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  const bundler = new webpackDevServer(compiler, {
    publicPath: '/bundle/',
    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  });

  bundler.listen(8080, 'localhost', () => {
    console.log('Bundling project, please wait...')
  });
};
