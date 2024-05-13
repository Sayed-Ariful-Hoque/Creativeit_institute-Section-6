import React from 'react'

function InputSelection({Label, palaceholder}) {
    return (
        <div className=' flex flex-col w-[508px] gap-y-2.5 '>
            <label className='text-lg font-medium'></label>
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
    )
}

export default InputSelection