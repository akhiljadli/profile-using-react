import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';   // This is the global stylesheet
import App from './App.jsx';  // Main app component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
