import React from 'react'

function InputFild({Label, palaceholder, type}) {
  return (
    <div className=' flex flex-col w-[508px] gap-y-2.5 '>
        <label className='text-lg font-medium'>{Label}</label>
        <input className=' outline-none' type={`${type}`}  placeholder={`${palaceholder}`} />
        <p className='w-full border-[#F0F0F0] border-b'></p>
    </div>
  )
}

export default InputFild