import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <h1>CONTENT</h1>
    <App />
    <h1>FOOTER</h1>
  </React.StrictMode>
  // <>
  //   <h1>Akın CENGİZ</h1>
  //   <p>YMYP 4</p>
  // </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
