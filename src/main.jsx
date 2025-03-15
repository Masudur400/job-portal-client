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
import AllJobs from './components/Jobs/AllJobs';
import JobDetails from './components/Jobs/JobDetails';
import ManageAllJobs from './components/ManageJobs/ManageAllJobs'; 
import ManageUsers from './components/ManageUsers/ManageUsers';
import AddEmployees from './components/Employees/addEmployees';
import ManageEmployees from './components/Employees/ManageEmployees';
import ApplyForm from './components/ApplyForm/ApplyForm';
import ManageApplies from './components/ManageApplies/ManageApplies';
import AboutUs from './components/AboutUs/AboutUs';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import ErrorPage from './components/ErrorPage/ErrorPage';
import ManageProjects from './components/ManageProjects/ManageProjects';
import PostProjects from './components/ManageProjects/PostProjects';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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
        path:'/updateJobs/:id',
        element:  <UpdateJobs></UpdateJobs>
      },
      {
        path:'/profile',
        element:<PrivetRoute>
          <Profile></Profile>
        </PrivetRoute>
      },
      {
        path:'/jobs',
        element: <AllJobs></AllJobs>
      },
      
      {
        path:'/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path:'/apply/:id',
        element:<PrivetRoute>
          <ApplyForm></ApplyForm>
        </PrivetRoute>
      },
      {
        path:'/job/:id',
        element: <JobDetails></JobDetails>
      },
      // for admin 
      {
        path:'/manageUsers',
        element: <ManageUsers></ManageUsers>
      },
      // fo admin & moderator
      {
        path:'/allJobs',
        element: <ManageAllJobs></ManageAllJobs>
      },
      // fo admin & moderator
      {
        path:'/manageApplies',
        element:  <ManageApplies></ManageApplies>
      },
      // for admin & moderator 
      {
        path:'/addEmployee',
        element:<AddEmployees></AddEmployees>
      },
      // fo admin & moderator 
      {
        path:'/manageEmployee',
        element:<ManageEmployees></ManageEmployees>
      },
      // fo admin & moderator 
      {
        path:'/postProjects',
        element: <PostProjects></PostProjects>
      },
      // fo admin & moderator 
      {
        path:'/manageProjects',
        element: <ManageProjects></ManageProjects>
      },
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
