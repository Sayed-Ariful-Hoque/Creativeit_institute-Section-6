import React, { useState } from 'react'
import BredCumb from '../Components/BredCumb'
import Container from '../Layer/Container'
import Title from '../Layer/Title'
import InputFild from '../Layer/InputFild'
import BorderB from '../Layer/BorderB'
import check from '/src/assets/Signup/checkbox/check.png'
import uncheck from '/src/assets/Signup/checkbox/uncheck.png'
import Button from '../Layer/Button'

function SignUp() {

    let [imgsCheckBox, setImgsCheckBox] = useState(false)
    let [imgsCheckBox1, setImgsCheckBox1] = useState(false)
    return (
        <>
            <BredCumb />
            <Container>
                <p className='max-w-[644px] text-base text-[#767676] mt-32'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                <BorderB className="mt-[62px]" />
                <div>


                    {/* Your Personal Details */}
                    <>
                        <Title className="mt-[54px]" TiteleText="Your Personal Details " />
                        <div className=' flex  flex-wrap gap-x-10 gap-6'>
                            <InputFild Label="First Name" placeholder="First Name" />
                            <InputFild Label="First Name" placeholder="First Name" />
                            <InputFild Label="First Name" placeholder="First Name" />
                            <InputFild Label="First Name" placeholder="First Name" />

                        </div>
                    </>

                    {/* New Customer  */}
                    <>
                        <Title className="mt-[54px]" TiteleText="New Customer " />
                        <div className=' flex  flex-wrap gap-x-10 gap-6'>
                            <InputFild Label="Address 1" placeholder="Address 1" />
                            <InputFild Label="Address 2" placeholder="Address 2" />
                            <InputFild Label="City" placeholder="City" />
                            <InputFild Label="Post Code" placeholder="Post Code" type="Number" />
                            <div className=' flex flex-col w-[508px] gap-y-2.5 '>
                                <label className='text-lg font-medium'>Division</label>
                                <select className='text-[#767676] bg-transparent' >
                                    <option value="Please select">Please select</option>
                                    <option value="Please select">Dhaka</option>
                                    <option value="Please select">Chattogram</option>
                                    <option value="Please select">Khulna</option>
                                    <option value="Please select">Sylhet</option>
                                    <option value="Please select">Barishal</option>
                                    <option value="Please select">Rangpur</option>
                                    <option value="Please select">Mymensingh</option>
                                </select>
                                <p className='w-full border-[#F0F0F0] border-b'></p>
                            </div>
                            <div className=' flex flex-col w-[508px] gap-y-2.5 '>
                                <label className='text-lg font-medium'>District</label>
                                <select className='text-[#767676] bg-transparent' >
                                    <option value="Please select">Please select</option>
                                    <option value="Please select">Dhaka</option>
                                    <option value="Please select">Chattogram</option>
                                    <option value="Please select">Khulna</option>
                                    <option value="Please select">Sylhet</option>
                                    <option value="Please select">Barishal</option>
                                    <option value="Please select">Rangpur</option>
                                    <option value="Please select">Mymensingh</option>
                                    <option value="Please select">Noakhali</option>
                                </select>
                                <p className='w-full border-[#F0F0F0] border-b'></p>
                            </div>
                        </div>
                    </>

                    {/* Your Personal Details  */}
                    <>
                        <Title className="mt-[54px]" TiteleText="Your Personal Details " />
                        <div className=' flex  flex-wrap gap-x-10 gap-6'>
                            <InputFild Label="Password" placeholder="Your Password" type="password" />
                            <InputFild Label="Repeat Password" placeholder="Repeat Password" type="password" />
                        </div>
                        <BorderB className="mt-[70px]" />
                    </>

                    {/* I have read and agree to the Privacy Policy */}
                    <>
                        <p className='flex gap-x-4 mt-16'> <input type="checkbox" /> I have read and agree to the Privacy Policy</p>
                        <div className=' flex items-center gap-x-8  text-[#767676] font-normal text-sm mt-6'>
                            <span className=''>Subscribe Newsletter</span>
                            <div className='flex items-center gap-x-10'>
                                <label htmlFor="no" className=' cursor-pointer   relative ' >
                                    <input type="redio" id='no' className=' w-0 mr-4 cursor-pointer opacity-0 ' name='id' onClick={() => setImgsCheckBox(!imgsCheckBox)} />Yes
                                    {
                                        imgsCheckBox ?

                                            (<img className='w-3 h-3 absolute top-1/2 translate-y-[-50%] left-0' src={check} alt="check" />
                                            )

                                            :
                                            (<img className='w-3 h-3 absolute top-1/2 translate-y-[-50%] left-0' src={uncheck} alt=" uncheck" />
                                            )
                                    }

                                </label>
                                <label htmlFor="no" className=' cursor-pointer   relative ' onClick={() => setImgsCheckBox1(imgsCheckBox1)} >
                                    <input type="checkbox" id='no' className=' w-0 mr-4 cursor-pointer opacity-0 ' name='id' />NO
                                    {
                                        imgsCheckBox1 ?

                                            (<img className='w-3 h-3 absolute top-1/2 translate-y-[-50%] left-0' src={check} alt="check" />
                                            )

                                            :
                                            (<img className='w-3 h-3 absolute top-1/2 translate-y-[-50%] left-0' src={uncheck} alt=" uncheck" />
                                            )
                                    }

                                </label>
                            </div>
                        </div>
                        <Button buttonText="Log in" className="mt-7" />

                    </>

                </div>
            </Container>
        </>
    )
}

export default SignUp