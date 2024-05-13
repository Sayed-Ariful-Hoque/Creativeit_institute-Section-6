import React, { useState } from 'react'
import { IoGridSharp } from "react-icons/io5";
import { BsGrid1X2Fill } from "react-icons/bs";
import Pagination from './Pagination';



function ProductRightTop() {

    let [showNumber, setShowNumber] = useState(12)

    // let ShowUpdateNumber = (element) => {
    //     let a = element.target.value
    //     console.log(a)
    // }

  let  ShowNumberUpdate = (e)=>{
       let a =Number(e.target.value)
       setShowNumber(a)
    }

    return (
        <>
            <div className="ProductRightTop flex justify-between items-center">
                <div className="leftPart flex gap-x-5">
                    <div className="grid-1 w-9 h-9 px-2.5 py-2 bg-black text-white"> <IoGridSharp className='w-4' /></div>
                    <div className="grid-2 w-9 h-9 px-2.5 py-2 bg-transparent text-[#F0F0F0] border border-[#F0F0F0] "> < BsGrid1X2Fill className='w-4' /></div>
                </div>
                <div className="RightPart flex items-center gap-x-10 font-DMSans text-base font-normal text-[#767676]">
                    <div className='flex items-center gap-x-3.5'>
                        <p>Sort by:</p>
                        <select className='w-[229px] h-9 px-5 bg-transparent border border-[#F0F0F0] '>
                            <option value="Featured">Featured</option>
                            <option value="New Arrivals">New Arrivals</option>
                            <option value="Special Offers">Special Offers</option>
                        </select>
                    </div>
                    <div className='flex items-center gap-x-4'>
                        <p>Show:</p>
                        <select className='w-[139px] h-9 px-5 border bg-transparent border-[#F0F0F0] ' onChange={ShowNumberUpdate}>
                            <option value="12">12</option>
                            <option value="24">24</option>
                            <option value="36">36</option>
                        </select> 
                    </div>
                </div>
            </div>
            <div className='pt-[50px]'>
                <Pagination itemsPerPage={showNumber} />
    
            </div>
        </>
    )
}

export default ProductRightTop