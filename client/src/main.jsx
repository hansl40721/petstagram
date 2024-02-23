// import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Homepage from './pages/Homepage.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login';
import Post from './pages/Post';
import Prof from "./pages/Prof";
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Homepage />
      }, {

        path: '/login',
        element: <Login />
      }, {

        path: '/signup',
        element: <Signup />
      }, {

        path: '/profile',
        element: <Prof />
      }, {
        path: '/post',
        element: <Post />
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
