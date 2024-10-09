import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';

import './app/App.css';
import './app/styles/normalize.css';
import './app/styles/vars.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
