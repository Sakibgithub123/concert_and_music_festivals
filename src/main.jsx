import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx';
import ServiceDetails from './components/ServiceDetails/ServiceDetails.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,

    },
    {
      path:"/serviceDetails/:id",
      element:<ServiceDetails></ServiceDetails>,
      loader:()=>fetch('/Events.json')
     
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/register",
      element:<Register></Register>
    }
  ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
