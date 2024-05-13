import React, { useState } from 'react'
import BredCumb from '../Components/BredCumb'
import Container from '../Layer/Container'
import BorderB from '../Layer/BorderB'
import Title from '../Layer/Title'
import InputFild from '../Layer/InputFild'
import Button from '../Layer/Button'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'

function Login() {

    let [password, setPassWord] = useState(true)
    return (
        <>
            <BredCumb />
            <Container>
                <p className='w-[644px] text-base text-[#767676] mt-32'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

                <BorderB className="mt-[62px]" />

                <div className="mt-14">
                    <Title TiteleText="Returning Customer" />
                    <div className='flex gap-x-10'>
                        <InputFild Label="Email address" type="email" placeholder="company@domain.com" />
                        <div className=' relative'>
                            <InputFild Label="Password" type={password ? "password" : "text"} placeholder="Password" />
                            {
                                password ?
                                    <IoEyeOffOutline onClick={()=> setPassWord(!password)} className=' absolute right-0 bottom-4' />
                                    :
                                    <IoEyeOutline onClick={()=> setPassWord(!password)} className=' absolute right-0  bottom-4' />

                            }
                        </div>
                    </div>
                    <Button buttonText="Log in" className="mt-7 bg-transparent !text-[#262626] border border-[#262626] " />
                    <BorderB className="mt-[70px]" />
                </div>

                <div className='mt-[58px]'>
                    <Title TiteleText="New Customer" />
                    <p className='w-[644px] text-base text-[#767676] mt-[38px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

                    <Button buttonText="Continue" className="mt-[67px]" />

                </div>
            </Container>
        </>

    )
}

export default Login