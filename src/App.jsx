import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeRoutes from './routes/HomeRoutes'
import LandingPages from './pages/LandingPages'

const App = () => {
  const route = createBrowserRouter([
    {
      path:"",
      element:<HomeRoutes/>,
      children:[
        {path:"", element:<LandingPages/>}
      ]
    }
  ])
  return (
    <RouterProvider router={route}/>
  )
}

export default App