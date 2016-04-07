import express from 'express';
import devSetup from './devSetup';
import config from './config';

const { env, isDev, staticFiles } = config;
const port = process.env.PORT || 3000;
const app = express();

console.log(env);
if (isDev) {
  console.log('run dev setup')
  devSetup(app);
}

app.use(express.static(staticFiles));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
