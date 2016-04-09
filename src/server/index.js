import express from 'express';
import devSetup from './devSetup';
import config from './config';
import schema from './data/schema'
import GraphQLHttp from 'express-graphql';
import React from 'react';
import ReactDom from 'react-dom';

const { env, isDev, staticFiles } = config;
const port = process.env.PORT || 3000;
const app = express();

app.use('/graphql', GraphQLHttp({
  schema,
  graphiql: true,
}));

console.log(env);
if (isDev) {
  console.log('run dev setup')
  devSetup(app);
}

app.use(express.static(staticFiles));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
