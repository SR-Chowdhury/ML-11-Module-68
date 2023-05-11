import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layouts/MainLayout.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import AuthProvider from './Providers/AuthProvider';
import AddCoffee from './Components/CRUD/AddCoffee';
import UpdateCoffee from './Components/CRUD/UpdateCoffee';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee/>
      },
      {
        path: "/updateCoffee",
        element: <UpdateCoffee/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
            <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
