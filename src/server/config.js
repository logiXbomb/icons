import { resolve } from 'path';

const env = process.env.NODE_ENV || 'dev';
const isDev = env === 'dev';
const _root = resolve(__dirname, '../../');
const staticFiles = resolve(_root, 'build');

const config = {
  env,
  isDev,
  staticFiles,
};

export default config;
