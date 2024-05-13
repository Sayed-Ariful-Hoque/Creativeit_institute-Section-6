import React from 'react'
import Navbar from './Navbar'
import SearchField from './SearchField'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'

function RootLayout() {
  return (
    <>
    <Navbar/>
    <SearchField/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout