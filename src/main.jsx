import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Launch from './pages/Launch/index.jsx';
import Popular from './pages/Popular/index.jsx';
import LoginPage from './pages/Login/index.jsx';
import RegisterPage from './pages/Register/index.jsx';
import RecoverPassPage from './pages/RecoverPass/index.jsx';
import ShoppingCart from './pages/ShoppingCart/index.jsx';
import Account from './pages/Account/index.jsx';
import ViewGamePage from './pages/ViewGame/index.jsx';
import PromotionsPage from './pages/Promotions/index.jsx';
import GenresPage from './pages/Genres/index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/recover-password", element: <RecoverPassPage /> },
      { path: "/launch", element: <Launch /> },
      { path: "/popular", element: <Popular /> },
      { path: "/genres", element: <GenresPage /> },
      { path: "/promotions", element: <PromotionsPage /> },
      { path: "/cart", element: <ShoppingCart /> },
      { path: "/account", element: <Account /> },
      { path: "/game", element: <ViewGamePage />},
      { path: "/game/:gameID", element: <ViewGamePage />},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);