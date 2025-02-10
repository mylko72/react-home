import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './pages/Home';
import Works from './pages/Works';
import NotFound from './pages/NotFound';
import { ParallaxApiProvider } from './context/ParallaxApiContext';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path: '/work', element: <Works />},
    ]
  }
])

root.render(
  <React.StrictMode>
    <ParallaxApiProvider>
      <RouterProvider router={router} />
    </ParallaxApiProvider>
  </React.StrictMode>
);
