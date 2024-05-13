import React, { useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


function ShopByCategory() {

    let [cataGorySortDown, setCataGorySortDown] = useState(true)
    let [cataGoryOne, setCataGoryOne] = useState(false)
    let [cataGoryThree, setCataGoryThree] = useState(false)

    return (
        <>
            <div className='Shop By Catacory '>
                <h3 onClick={() => setCataGorySortDown(!cataGorySortDown)}
                    className=' font-DMSans text-xl font-bold flex justify-between items-center'>Shop by Category
                    <TiArrowSortedDown
                        className={` transition-all duration-500 ${cataGorySortDown ? "-rotate-180" : "rotate-0"}`} /> </h3>

                <ul className={`mt-[35px] transition-all duration-500 ${cataGorySortDown ? " opacity-100 visible" : " opacity-0 invisible"}`}>
                    <li onClick={() => setCataGoryOne(!cataGoryOne)} className=' relative pb-5 font-DMSans text-base text-[#767676]  flex justify-between border-b border-[#F0F0F0]'>Category 1
                        <FaPlus className={`transition-all duration-500 absolute right-0 top-1 ${cataGoryOne ? " opacity-0 invisibal" : " opacity-100 visible rotate-180"}`} />
                        <FaMinus className={`transition-all duration-500 absolute right-0 top-1 ${cataGoryOne ? "opacity-100 visible" : " opacity-0 invisibal"}`} />
                    </li>
                    {
                        cataGoryOne && (

                            <ul className='pr-5 pt-5'>
                                <li className='p-5 border-b border-[#F0F0F0]'>Sub  Category one </li>
                                <li className='p-5 border-b border-[#F0F0F0]'>Sub  Category tow </li>
                                <li className='p-5 border-b border-[#F0F0F0]'>Sub  Category three </li>
                                <li className='p-5 border-b border-[#F0F0F0]'>Sub  Category foure </li>
                                <li className='p-5 border-b border-[#F0F0F0]'>Sub  Category five </li>
                            </ul>
                        )
                    }
                    <li className=' relative pb-5 font-DMSans text-base  flex justify-between border-b border-[#F0F0F0] text-[#767676]'>Category 2

                    </li>
                    <li onClick={() => setCataGoryThree(!cataGoryThree)} className=' relative pb-5 font-DMSans text-base text-[#767676]  flex justify-between border-b border-[#F0F0F0]'>Category 3
                        <FaPlus className={`transition-all duration-500 absolute right-0 top-1 ${cataGoryThree ? " opacity-0 invisibal" : " opacity-100 visible rotate-180"}`} />
                        <FaMinus className={`transition-all duration-500 absolute right-0 top-1 ${cataGoryThree ? "opacity-100 visible" : " opacity-0 invisibal"}`} />
                    </li>
                    {
                        cataGoryThree && (

                            <ul className='pr-5 pt-5'>
                                <li className='p-5 border-b border-[#F0F0F0]' >Sub  Category one </li>
                                <li className='p-5 border-b border-[#F0F0F0]' >Sub  Category tow </li>
                                <li className='p-5 border-b border-[#F0F0F0]' >Sub  Category three </li>
                                <li className='p-5 border-b border-[#F0F0F0]' >Sub  Category foure </li>
                                <li className='p-5 border-b border-[#F0F0F0]' >Sub  Category five </li>
                            </ul>
                        )
                    }
                    <li className=' relative pb-5 font-DMSans text-base text-[#767676]  flex justify-between border-b border-[#F0F0F0]'>Category 4
                    </li>
                    <li className=' relative pb-5 font-DMSans text-base text-[#767676]  flex justify-between border-b border-[#F0F0F0]'>Category 5
                    </li>
                </ul>
            </div >
        </>
    )
}

export default ShopByCategory