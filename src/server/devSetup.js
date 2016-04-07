import { createProxyServer } from 'http-proxy';
import bundle from './../../webpack/devServer';

const devSetup = (app) => {
  const proxy = createProxyServer();
  console.log('SPINNING UP DEV ENVIRONMENT...');
  bundle();

  app.all('/bundle/*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });
  app.all('/sockjs-node/*', (req, res) => {
    proxy.web(req, res, {
      target: 'http://localhost:8080'
    });
  });
  proxy.on('error', () => {
    console.log('Could not connect to proxy, please try again...');
  });
}

export default devSetup;
