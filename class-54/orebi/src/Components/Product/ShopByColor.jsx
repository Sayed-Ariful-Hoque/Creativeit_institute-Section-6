import React, { useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";

function ShopByColor() {

    let [shopByColorSortDown, setShopByColorSortDown] = useState(true)


    return (
        <>
            <div className='Shop By Catacory pt-[53px]  '>
                <h3 onClick={() => setShopByColorSortDown(!shopByColorSortDown)}
                    className=' font-DMSans text-xl font-bold flex justify-between items-center mb-8'> Shop by Color
                    <TiArrowSortedDown
                        className={` transition-all duration-500 ${shopByColorSortDown ? "-rotate-180" : "rotate-0"}`} /> </h3>

                <ul className={`transition-all duration-500 ${shopByColorSortDown ? " opacity-100 visible" : " opacity-0 invisible"}`}>
                    <li className=' relative pb-5 font-DMSans text-base text-[#767676] flex items-center gap-2.5 border-b border-[#F0F0F0]'> <span className='w-3 h-3 rounded-full bg-[#000000]'></span> Category 1</li>
                    <li className=' relative pb-5 font-DMSans text-base text-[#767676] flex items-center gap-2.5 border-b border-[#F0F0F0]'> <span className='w-3 h-3 rounded-full bg-[#FF8686]'></span> Category 1</li>
                    <li className=' relative pb-5 font-DMSans text-base text-[#767676] flex items-center gap-2.5 border-b border-[#F0F0F0]'> <span className='w-3 h-3 rounded-full bg-[#7ED321]'></span> Category 3</li>
                    <li className=' relative pb-5 font-DMSans text-base text-[#767676] flex items-center gap-2.5 border-b border-[#F0F0F0]'> <span className='w-3 h-3 rounded-full bg-[#B6B6B6]'></span> Category 4</li>
                    <li className=' relative pb-5 font-DMSans text-base text-[#767676] flex items-center gap-2.5 border-b border-[#F0F0F0]'> <span className='w-3 h-3 rounded-full bg-[#15CBA5]'></span> Category 5 </li>
                </ul>
            </div >
        </>
    )
}

export default ShopByColor