import React from 'react'
import Container from '../Layer/Container'
import { FaAngleRight } from "react-icons/fa";


function Product() {
  return (
    <div>
        <Container>
            <h2>Products</h2>
            <p className='flex items-center gap-x-2'><span>Home</span> <FaAngleRight /> <span className=' capitalize'>{window.location.pathname.split("/")[1]}</span></p>
        </Container>
    </div>
  )
}

export default Product