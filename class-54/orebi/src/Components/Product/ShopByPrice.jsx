import React, { useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";


function ShopByPrice() {

    let [shopByBrandSortDown, setShopByBrandSortDown] = useState(true)


    return (
        <>
            <div className='Shop By Catacory pt-[53px]  '>
                <h3 onClick={() => setShopByBrandSortDown(!shopByBrandSortDown)}
                    className=' font-DMSans text-xl font-bold flex justify-between items-center mb-8'> Shop by Price
                    <TiArrowSortedDown
                        className={` transition-all duration-500 ${shopByBrandSortDown ? "-rotate-180" : "rotate-0"}`} /> </h3>

                <ul className={`transition-all duration-500 ${shopByBrandSortDown ? " opacity-100 visible" : " opacity-0 invisible"}`}>
                    <li className=' relative pb-5 font-DMSans text-base text-[#767676] flex items-center gap-2.5 border-b border-[#F0F0F0]'><span>$0.00 - $9.99</span></li>
                    <li className=' relative pb-5 font-DMSans text-base text-[#767676] flex items-center gap-2.5 border-b border-[#F0F0F0]'><span>$10.00 - $19.99</span></li>
                    <li className=' relative pb-5 font-DMSans text-base text-[#767676] flex items-center gap-2.5 border-b border-[#F0F0F0]'><span>$20.00 - $29.99</span></li>
                    <li className=' relative pb-5 font-DMSans text-base text-[#767676] flex items-center gap-2.5 border-b border-[#F0F0F0]'><span>$30.00 - $39.99</span></li>
                    <li className=' relative pb-5 font-DMSans text-base text-[#767676] flex items-center gap-2.5 border-b border-[#F0F0F0]'><span>$40.00 - $69.99</span> </li>
                </ul>
            </div >
        </>
    )
}

export default ShopByPrice