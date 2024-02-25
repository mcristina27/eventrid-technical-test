import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import MemeList from './pages/MemeList';
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
