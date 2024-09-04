import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/video-react/dist/video-react.css'
import { SpeedInsights } from "@vercel/speed-insights/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <SpeedInsights />
         <App />
      </BrowserRouter>
   </React.StrictMode>
);