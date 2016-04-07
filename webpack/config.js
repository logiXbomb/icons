import { resolve } from 'path';

const _root = resolve(__dirname, '..');
const _client = resolve(_root, 'src', 'client');
const _build = resolve(_root, 'build', 'bundle');

const config = {
  js: {
    main: resolve(_client, 'main.js'),
  },
  buildPath: _build,
};

export default config;
