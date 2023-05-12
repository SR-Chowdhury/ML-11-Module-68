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
import SingleView from './Components/CRUD/SingleView';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch("http://localhost:5000/coffee")
      },
      {
        path: "/addCoffee",
        element: <AddCoffee/>
      },
      {
        path: '/coffee/:id',
        element: <SingleView/>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee/>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
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
