import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signin from './assets/components/Signin'
import Home from './assets/components/Home';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Signin />
      }
    ]
  }
]);

const root = createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={router} />
);


export default App;