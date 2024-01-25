import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './view/Home/Home';
import Posts from './view/Posts/Posts';
import Readpost from './view/ReadPost/Readpost';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/post/:id",
    element: <Readpost />,
  },
  {
    path: "*",
    element: <h1> 404 Not Found</h1>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);


