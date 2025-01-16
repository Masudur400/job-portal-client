import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import LoginAndRegister from './components/Login&Register/LoginAndRegister';
import Login from './components/Login&Register/Login';
import Register from './components/Login&Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      }
    ]
  },

  // for login and register 
  {
    path:'loginRegister',
    element: <LoginAndRegister></LoginAndRegister>,
    children:[
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]
    
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
