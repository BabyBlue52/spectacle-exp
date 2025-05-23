import React from "react"
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const root = createRoot(document.getElementById('root')!); // ! == null check
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
