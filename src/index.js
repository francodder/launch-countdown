import React from 'react';
import ReactDOM from 'react-dom';

// # ASSETS
import './index.css';

// # COMPONENTS
import CountdownPage from './pages/countdownPage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CountdownPage/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
