import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home/Homes/Home.jsx';
import Alltyos from './pages/Alltoys/Alltyos.jsx';
import Mytoys from './pages/My toys/Mytoys.jsx';
import Addtoys from './pages/Addtoys/Addtoys.jsx';
import Blogs from './pages/Blog/Blogs.jsx';
import Login from './pages/login/Login.jsx';
import RegisterPage from './pages/register/RegisterPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>

      },
      {
         path:'/alltoys',
         element:<Alltyos></Alltyos>
      },
      {
        path:'/mytoys',
        element:<Mytoys></Mytoys>
      },
      {
        path:'/addtoys',
        element:<Addtoys></Addtoys>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },{
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<RegisterPage></RegisterPage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
