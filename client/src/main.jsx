import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signin from './assets/components/Signin';
import Home from './assets/components/Home';
import Wishlist from './assets/components/Wishlist';
import LikedGames from './assets/components/LikedGames';
import GamePage from './assets/components/GamePage';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Oh no! Something went wrong!</h1>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Signin />
      },
      {
        path: "/wishlist",
        element: <Wishlist />
      },
      {
        path: "/likedGames",
        element: <LikedGames />
      },
      {
        path: "/game", //change to path: "/game/:GameId", when ready

        element: <GamePage />
      }
    ]
  }
]);

const root = createRoot(document.getElementById('root'))

root.render(

  <RouterProvider router={router} />

);


//needed? -CDL
export default App;