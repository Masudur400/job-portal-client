import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Root from './components/Root/Root';
import Home from './components/Home/Home';
import LoginAndRegister from './components/Login&Register/LoginAndRegister';
import Login from './components/Login&Register/Login';
import Register from './components/Login&Register/Register';
import PostJobs from './components/PostJobs/PostJobs'; 
import UpdateJobs from './components/PostJobs/UpdateJobs';
import AuthProviders from './components/Providers/AuthProviders';
import Profile from './components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/postJobs',
        element:<PostJobs></PostJobs>
      },
      {
        path:'/updateJobs',
        element:  <UpdateJobs></UpdateJobs>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
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



const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProviders>
     <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
     </AuthProviders>
  </StrictMode>,
)
