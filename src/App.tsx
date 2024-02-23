import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import MemeList from './pages/MemeList';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/meme-list",
      element: <MemeList />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
