import React, { useState } from 'react'
import BredCumb from '../Components/BredCumb'
import Container from '../Layer/Container'
import ProductDeatles from '/src/assets/ProductDeatles/ProductDeatles.png'
import Title from '../Layer/Title'
import { FaMinus, FaPlus, FaStar } from 'react-icons/fa'
import BorderB from '../Layer/BorderB'
import Button from '../Layer/Button'
import InputFild from '../Layer/InputFild'

function ProductDetalis() {

    let [count, setCount] = useState(1)

    let [featuresDetails, setFeaturesDetails] = useState(false)
    let [shippingReturns, setshippingReturns] = useState(false)
    return (
        <>
            <BredCumb />
            <Container>
                {/* Product Details  */}
                <div className=' flex flex-wrap gap-10 mt-10'>
                    <div className='w-[780px] h-[780px] border border-[#F0F0F0] overflow-hidden'>
                        <img className='w-full h-full object-contain hover:scale-150 transition-all duration-500' src={ProductDeatles} alt="ProductDeatles" />
                    </div>
                    <div className='w-[780px] h-[780px] border border-[#F0F0F0] overflow-hidden'>
                        <img className='w-full h-full object-contain hover:scale-150 transition-all duration-500' src={ProductDeatles} alt="ProductDeatles" />
                    </div>
                    <div className='w-[780px] h-[780px] border border-[#F0F0F0] overflow-hidden'>
                        <img className='w-full h-full object-contain hover:scale-150 transition-all duration-500' src={ProductDeatles} alt="ProductDeatles" />
                    </div>
                    <div className='w-[780px] h-[780px] border border-[#F0F0F0] overflow-hidden'>
                        <img className='w-full h-full object-contain hover:scale-150 transition-all duration-500' src={ProductDeatles} alt="ProductDeatles" />
                    </div>
                </div>

                {/* Product-review  */}
                <div className='mt-12'>
                    <Title TiteleText="Product" className="!mb-0" />
                    <div className='flex items-center gap-x-6 mt-3'>
                        <ul className=' text-[#FFD881] flex items-center gap-0.5'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </ul>
                        <p className='text-sm text-[#767676]'>1 Review</p>
                    </div>
                    <div className='flex items-center gap-x-[22px] mt-5 font-bold'>
                        <p className='text-[#767676]'><del>$88.00</del></p>
                        <p className=' '>$44.00</p>
                    </div>
                    <BorderB className=" w-[780px] mt-6" />
                </div>

                {/* COLOR div  */}
                <div className='flex items-center gap-x-[53px] mt-7 '>
                    <p className=' uppercase font-bold text-base'>Color :</p>
                    <ul className=' flex items-center gap-x-4 h-10'>
                        <li className='w-5 h-5 hover:w-7 hover:h-7 rounded-full bg-[#000000]'></li>
                        <li className='w-5 h-5 hover:w-7 hover:h-7 rounded-full bg-[#FF8686]'></li>
                        <li className='w-5 h-5 hover:w-7 hover:h-7 rounded-full bg-[#7ED321]'></li>
                        <li className='w-5 h-5 hover:w-7 hover:h-7 rounded-full bg-[#B6B6B6]'></li>
                        <li className='w-5 h-5 hover:w-7 hover:h-7 rounded-full bg-[#15CBA5]'></li>
                    </ul>
                </div>

                {/* SIZE: div */}
                <div className='flex items-center gap-x-[76px] mt-[30px]'>
                    <p className=' uppercase font-bold text-bas'>SIZE:</p>
                    <select name="" id="" className=' uppercase w-[140px] px-5 border'>
                        <option className='text-3xl right-5 absolute' value="">s</option>
                        <option className='text-3xl right-5 absolute' value="">m</option>
                        <option className='text-3xl right-5 absolute' value="">l</option>
                        <option className='text-3xl right-5 absolute' value="">xl</option>
                    </select>
                </div>

                {/* QUANTITY: div  */}
                <div className='flex items-center gap-[30px] mt-[30px] '>
                    <p className=' uppercase font-bold text-bas '>QUANTITY:</p>
                    <div className='border flex font-bold text-[#767676] items-center w-[139px] h-9 justify-between  px-5'>
                        <button onClick={() => count > 1 ? setCount(count - 1) : setCount(1)}>-</button>
                        <button>{count}</button>
                        <button onClick={() => setCount(count + 1)}>+</button>
                    </div>

                </div>
                <BorderB className="w-[780px] mt-8" />

                {/* STATUS: div  */}
                <div className='mt-5'>
                    <div className='flex gap-x-7'>
                        <p className=' uppercase font-bold text-bas'>STATUS:</p>
                        <p className='text-[#767676] font-bold text-bas'>In stock</p>
                    </div>
                    <BorderB className="w-[780px] mt-8" />
                </div>

                {/* Add to Wish List button div  */}
                <div>
                    <div className=' flex gap-x-5 mt-[30px]'>
                        <Button buttonText="Add to Wish List" className=" bg-transparent border border-[#262626] !text-[#262626] hover:bg-[#262626] hover:!text-white" />
                        <Button buttonText="Add to Cart" className=" bg-transparent border border-[#262626] !text-[#262626] hover:bg-[#262626] hover:!text-white" />
                    </div>
                    <BorderB className="w-[780px] mt-[30px]" />
                </div>

                <div>
                    <ul className={`mt-[35px] transition-all duration-500 `}>
                        <div className=''>
                            <li onClick={() => setFeaturesDetails(!featuresDetails)} className=' relative pb-5 font-DMSans text-base font-bold  flex justify-between border-b border-[#F0F0F0] w-[780px]'>FEATURES  & DETAILS
                                <FaPlus className={`transition-all duration-500 absolute right-0 top-1 ${featuresDetails ? " opacity-0 invisibal" : " opacity-100 visible rotate-180"}`} />
                                <FaMinus className={`transition-all duration-500 absolute right-0 top-1 ${featuresDetails ? "opacity-100 visible" : " opacity-0 invisibal"}`} />
                            </li>
                            {
                                featuresDetails && (

                                    <ul className='pr-5 pt-5 w-[780px] '>
                                        <li className=' p-2 border-b border-[#F0F0F0] capitalize'>Features & Details one </li>
                                        <li className=' p-2 border-b border-[#F0F0F0] capitalize'>Features & Details tow </li>
                                        <li className=' p-2 border-b border-[#F0F0F0] capitalize'>Features & Details three </li>
                                    </ul>
                                )
                            }
                        </div>
                        <div className='pt-5'>
                            <li onClick={() => setshippingReturns(!shippingReturns)} className=' relative pb-5 font-DMSans text-base font-bold flex justify-between border-b border-[#F0F0F0] w-[780px]'>SHIPPING & RETURNS
                                <FaPlus className={`transition-all duration-500 absolute right-0 top-1 ${shippingReturns ? " opacity-0 invisibal" : " opacity-100 visible rotate-180"}`} />
                                <FaMinus className={`transition-all duration-500 absolute right-0 top-1 ${shippingReturns ? "opacity-100 visible" : " opacity-0 invisibal"}`} />
                            </li>
                            {
                                shippingReturns && (

                                    <ul className='pr-5 pt-5 w-[780px] capitalize'>
                                        <li className='p-2 border-b border-[#F0F0F0]' >shippingReturns one </li>
                                        <li className='p-2 border-b border-[#F0F0F0]' >shippingReturns tow </li>
                                        <li className='p-2 border-b border-[#F0F0F0]' >shippingReturns three </li>
                                    </ul>
                                )
                            }
                        </div>
                    </ul>
                </div>
                <p className='mt-5 w-[780px] text-[#767676]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


                {/* Description div  */}
                <div className='mt-[124px] text-xl'>
                    <div className='flex gap-x-[62px]'>
                        <p className='text-[#767676]'>Description</p>
                        <p>Reviews (1)</p>
                    </div>
                    <input type="text" placeholder='1 review for Product' className='w-full outline-none pt-10 pb-4' />
                    <BorderB />
                </div>

                {/* John Ford div  */}
                <div className='mt-6'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-x-9 font-medium'>
                            <p className='text-base text-[#262626]'>John Ford</p>
                            <ul className=' text-[#FFD881] flex items-center gap-0.5'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </ul>
                        </div>
                        <p className='text-[#767676]'>6 months ago</p>
                    </div>
                    <p className='text-[#767676] mt-3.5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <BorderB className="mt-4" />
                </div>

                {/* Add a Review div  */}
                <div className=' mt-[53px]'>
                    <Title TiteleText="Add a Review" />
                    <div className='flex flex-col gap-y-6'>
                        <InputFild Label="Name" placeholder="Your name here" type="text" />
                        <InputFild Label="Email" placeholder="Your email here" type="email" />
                        <InputFild Label="Review" placeholder="Your review here" type="text" borderclassName="mt-[77px]"/>
                    </div>
                    <Button buttonText="Post"  className="mt-8" />
                </div>
            </Container>
        </>
    )
}

export default ProductDetalis