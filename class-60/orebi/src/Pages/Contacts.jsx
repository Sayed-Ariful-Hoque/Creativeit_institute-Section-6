import React, { useState } from 'react'
import BredCumb from '../Components/BredCumb'
import Container from '../Layer/Container'
import Title from '../Layer/Title'
import InputFild from '../Layer/InputFild'
import Button from '../Layer/Button'
import { FaMinus, FaPlus } from 'react-icons/fa'

function Contacts() {



    let [cataGorySortDown, setCataGorySortDown] = useState(true)
    let [cataGoryOne, setCataGoryOne] = useState(false)
    let [cataGoryThree, setCataGoryThree] = useState(false)

    return (
        <>
            <BredCumb />
            <Container>
                <div className='mt-[125px]'>
                    <Title TiteleText="Fill up a Form" />
                    <div className='flex flex-col gap-y-6'>
                        <InputFild Label="Name" placeholder="Your name here" type="text" />
                        <InputFild Label="Email" placeholder="Your email here" type="email" />
                        <InputFild Label="Message" placeholder="Your message here">
                            <textarea className=' outline-none' name="" id=""></textarea>
                        </InputFild>
                    </div>
                    <Button className="mt-[30px]" buttonText="Post" />
                </div>
                <div className="map mt-[140px] relative">
                    <div className="addres w-[451px] bg-white absolute left-20 top-20 px-5  pb-6">
                        <div>


                            <ul className={`mt-[35px] transition-all duration-500 ${cataGorySortDown ? " opacity-100 visible" : " opacity-0 invisible"}`}>
                                <div className=''>
                                    <li onClick={() => setCataGoryOne(!cataGoryOne)} className=' relative pb-5 font-DMSans text-base font-bold  flex justify-between border-b border-[#F0F0F0]'>Germany Office
                                        <FaPlus className={`transition-all duration-500 absolute right-0 top-1 ${cataGoryOne ? " opacity-0 invisibal" : " opacity-100 visible rotate-180"}`} />
                                        <FaMinus className={`transition-all duration-500 absolute right-0 top-1 ${cataGoryOne ? "opacity-100 visible" : " opacity-0 invisibal"}`} />
                                    </li>
                                    {
                                        cataGoryOne && (

                                            <ul className='pr-5 pt-5'>
                                                <li className='p-2 border-b border-[#F0F0F0]'>Sub  Category one </li>
                                                <li className='p-2 border-b border-[#F0F0F0]'>Sub  Category tow </li>
                                                <li className='p-2 border-b border-[#F0F0F0]'>Sub  Category three </li>
                                            </ul>
                                        )
                                    }
                                </div>
                                <div className='pt-5'>
                                    <li onClick={() => setCataGoryThree(!cataGoryThree)} className=' relative pb-5 font-DMSans text-base font-bold flex justify-between border-b border-[#F0F0F0]'>Slovakia Office
                                        <FaPlus className={`transition-all duration-500 absolute right-0 top-1 ${cataGoryThree ? " opacity-0 invisibal" : " opacity-100 visible rotate-180"}`} />
                                        <FaMinus className={`transition-all duration-500 absolute right-0 top-1 ${cataGoryThree ? "opacity-100 visible" : " opacity-0 invisibal"}`} />
                                    </li>
                                    {
                                        cataGoryThree && (

                                            <ul className='pr-5 pt-5'>
                                                <li className='p-2 border-b border-[#F0F0F0]' >Slovakia Office one </li>
                                                <li className='p-2 border-b border-[#F0F0F0]' >Slovakia Office tow </li>
                                                <li className='p-2 border-b border-[#F0F0F0]' >Slovakia Office three </li>
                                            </ul>
                                        )
                                    }
                                </div>
                            </ul>
                        </div>
                        <div className='mt-7'>

                            <Title TiteleText="Lithuania Office" className="text-base mb-0" />
                            <ul className='flex flex-col gap-y-3 text-[#767676]  mt-5'>
                                <li>575 Crescent Ave. Quakertown, PA 18951</li>
                                <li>+432 533 12 523</li>
                                <li>info@domain.com</li>
                                <li>Mon - Fri: 9am - 6pm</li>
                            </ul>
                        </div>
                    </div>
                    <iframe
                        className='w-full h-[572px]'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9796386387593!2d90.38562487484569!3d23.748105488865388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bcf5503447%3A0xb23d46e6ae82a5ab!2sKathalbagan%20Bazar!5e0!3m2!1sen!2sbd!4v1715511170576!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </Container>
        </>
    )
}

export default Contacts