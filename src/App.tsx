import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import MemeList from './pages/MemeList';
import { Toaster } from 'react-hot-toast';
import RequireAuth from './pages/RequireAuth';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/meme-list",
      element: <RequireAuth><MemeList /></RequireAuth>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
