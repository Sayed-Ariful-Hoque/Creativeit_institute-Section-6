import React from 'react'

function InputFild({children, Label, placeholder, type, borderclassName}) {
  return (
    <div className=' flex flex-col w-[508px] gap-y-2.5 '>
        <label className='text-lg font-medium'>{Label}</label>
        <input className=' outline-none' type={`${type}`}  placeholder={`${placeholder}`} />
        {children}
        <p className={`w-full border-[#F0F0F0] border-b ${borderclassName}`}></p>
    </div>
  )
}

export default InputFild