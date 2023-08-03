import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DarkModContextProvider } from "../src/context/darkMoodContext";
import App from './App';

/*===================================*/
/*===================================*/
/*===================================*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModContextProvider>
      <App />
    </DarkModContextProvider>
  </React.StrictMode>
); 