import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'
import Footer1 from '../Components/Footer1'

const HomeRoutes = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer1/>
    <Footer/>
    </>
  )
}

export default HomeRoutes