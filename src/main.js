import './assets/main.css';
import React from 'react';
import { render } from 'react-dom';
import { createPinia } from 'pinia';
import { createBrowserHistory } from 'history';
import { PiniaProvider } from 'pinia/react';
import App from './components/App.jsx/index.js';

const pinia = createPinia();
const history = createBrowserHistory();

const app = (
  <PiniaProvider pinia={pinia}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PiniaProvider>
);

render(app, document.getElementById('app'));
