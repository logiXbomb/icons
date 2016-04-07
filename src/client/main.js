import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <h1>Hello from React!</h1>
);

render(
  <App />,
  document.getElementById('app')
)
