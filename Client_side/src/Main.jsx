import React from 'react'; // Import React (no need to import StrictMode separately)
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Assuming App is being used elsewhere or remove if not needed
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Routers/Router.jsx'
import AuthProvider from './contacts/AuthProvider.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  </React.StrictMode>
);

