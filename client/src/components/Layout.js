import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Navbar'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout