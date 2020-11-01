import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
  <App />
  <React.StrictMode>
  ,
  </provider>,
  document.getElementById('root'),
);
