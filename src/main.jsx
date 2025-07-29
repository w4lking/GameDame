import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Launch from './pages/launch/index.jsx';
import Popular from './pages/Popular/index.jsx';
import LoginPage from './pages/Login/index.jsx';
import RegisterPage from './pages/Register/index.jsx';
import RecoverPassPage from './pages/RecoverPass/index.jsx';
import ShoppingCart from './pages/ShoppingCart/index.jsx';
import Account from './pages/Account/index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/", element: <RegisterPage /> },
      { path: "/recover-password", element: <RecoverPassPage /> },
      { path: "/launch", element: <Launch /> },
      { path: "/popular", element: <Popular /> },
      { path: "/cart", element: <ShoppingCart /> },
      { path: "/account", element: <Account /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);