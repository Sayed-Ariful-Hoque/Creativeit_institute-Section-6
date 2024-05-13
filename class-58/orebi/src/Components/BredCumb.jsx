import React from 'react'
import Container from '../Layer/Container'
import { FaAngleRight } from 'react-icons/fa'

function BredCumb() {
  return (
    <>
       <Container className=" pt-[124px]">
            <h2 className='text-[#262626] text-4xl'>
            <span className=' capitalize'>{window.location.pathname.split("/")[1]}</span>
            <span className=' ml-2'>{window.location.pathname.split("/")[2]}</span>            </h2>
            <p className='flex items-center gap-x-2 text-[#767676] mt-3'><span>Home</span> <FaAngleRight /> 
            <span className=' capitalize'>{window.location.pathname.split("/")[1]}</span>
            <span className=''>{window.location.pathname.split("/")[2]}</span>
            </p>
        </Container>
    </>
  )
}

export default BredCumb