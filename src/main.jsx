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
import Authprobider from './Authprobijder/Authprobider.jsx';
import Privateroute from './Privateroute/Privateroute.jsx';
import Singledata from './pages/Singledata/Singledata.jsx';

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
        element:<Privateroute><Mytoys></Mytoys></Privateroute>
      },
      {
        path:'/addtoys',
        element:<Privateroute><Addtoys></Addtoys></Privateroute>
      },
      {
        path:'/:id',
        element: <Privateroute><Singledata></Singledata></Privateroute>
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
   <Authprobider>
   <RouterProvider router={router} />
   </Authprobider>
  </React.StrictMode>,
)
