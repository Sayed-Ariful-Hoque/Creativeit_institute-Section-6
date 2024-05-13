import React from 'react'
import Container from '../../Layer/Container'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { SlReload } from "react-icons/sl";





const SiliderBottom = () => {
  return (
    <div className='border-b border-[#F0F0F0] lg:py-6 py-2 px-3 lg:px-0'>
        <Container className="flex justify-between ">
            <div className="LeftPart flex text-center items-center lg:gap-x-4 gap-x-2">
                <PiNumberTwoBold className=' lg:w-4 w-3' />
                <p className='font-DMSans text-xs lg:text-base text-[#6D6D6D]'>Two years warranty</p>
            </div>
            <div className="middle part flex text-center items-center lg:gap-x-4 gap-x-2">
                <FaTruck className=' lg:w-6 w-3'/>
                <p  className='font-DMSans text-xs lg:text-base text-[#6D6D6D]'>Free shipping</p>
            </div>
            <div className="LeftPart flex text-center items-center lg:gap-x-4 gap-x-2">
                <SlReload className=' rotate-[120deg] lg:w-6 w-3 '/>
                <p  className='font-DMSans text-xs lg:text-base text-[#6D6D6D]'>Free shipping</p>
            </div>
        </Container>
    </div>
  )
}

export default SiliderBottom