import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeRoutes from './routes/HomeRoutes'

const App = () => {
  const route = createBrowserRouter([
    {
      path:"",
      element:<HomeRoutes/>
    }
  ])
  return (
    <RouterProvider router={route}/>
  )
}

export default App