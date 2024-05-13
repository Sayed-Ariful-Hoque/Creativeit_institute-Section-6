import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' bg-slate-300 text-center  p-10 font-bold flex gap-3'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Navbar