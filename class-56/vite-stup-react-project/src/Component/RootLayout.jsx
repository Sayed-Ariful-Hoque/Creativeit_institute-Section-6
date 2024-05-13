import React from 'react'
import Navbar from '../Pages/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'

function RootLayout() {
    return (
        <>
            <Navbar/>
            <Outlet />
            <Footer/>
        </>
    )
}

export default RootLayout