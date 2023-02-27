import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/constants.css";
import './styles/main.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './routes/Navigation'
import ErrorPage from './routes/ErrorPage';
import Information from './routes/Information';
import Gallery from './routes/Gallery';
import Rates from './routes/Rates';
import Contact from './routes/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/info",
        element: <Information />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/rates",
        element: <Rates />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ]

  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
