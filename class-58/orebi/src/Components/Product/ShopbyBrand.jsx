import React, { useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";


function ShopbyBrand() {
    
    let [shopByBrandSortDown, setShopByBrandSortDown] = useState(true)

    return (
        <>
            <div className='Shop By Catacory pt-[53px]  '>
                <h3 onClick={() => setShopByBrandSortDown(!shopByBrandSortDown)}
                    className=' font-DMSans text-xl font-bold flex justify-between items-center mb-8'> Shop by Brand
                    <TiArrowSortedDown
                        className={` transition-all duration-500 ${shopByBrandSortDown ? "-rotate-180" : "rotate-0"}`} /> </h3>

                <ul className={`transition-all duration-500 ${shopByBrandSortDown ? " opacity-100 visible" : " opacity-0 invisible"}`}>
                    <li className=' relative pb-5 font-DMSans text-base text-[#767676] flex items-center gap-2.5 border-b border-[#F0F0F0]'>Brand 1</li>
                    <li className=' relative pb-5 font-DMSans text-base text-[#767676] flex items-center gap-2.5 border-b border-[#F0F0F0]'>Brand 2</li>
                    <li className=' relative pb-5 font-DMSans text-base text-[#767676] flex items-center gap-2.5 border-b border-[#F0F0F0]'>Brand 3</li>
                    <li className=' relative pb-5 font-DMSans text-base text-[#767676] flex items-center gap-2.5 border-b border-[#F0F0F0]'>Brand 4</li>
                    <li className=' relative pb-5 font-DMSans text-base text-[#767676] flex items-center gap-2.5 border-b border-[#F0F0F0]'>Brand 5 </li>
                </ul>
            </div >
        </>
    )
}

export default ShopbyBrand