import React from 'react'
import {createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom'
import Login from '../pages/login/login'
import Signup from '../pages/signup/Signup'
import Home from '../pages/home/Home'
import Feed from './Feed'
import Profile from './Profile'
import { getItem } from '../utils/localStorageManager'
const Body = () => {
  const user=getItem('accessToken')
  const appRouter=createBrowserRouter([
    {
      path:'/',
      element: user ? <Home/>:<Navigate to='/login'/>,
      children:[
        {
          path:'/',
          element:<Feed/>
        },
        {
          path:'profile/:userid',
          element:<Profile/>  
        }
      ]
    },
    {
      path:'/login',
      element:!user?<Login/>:<Navigate to='/'/>
    },
    {
      path:'/signup',
      element:!user?<Signup/>:<Navigate to='/'/>
    }
  ])
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body