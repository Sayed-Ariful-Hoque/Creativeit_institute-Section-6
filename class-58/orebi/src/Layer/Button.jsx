import React from 'react'

function Button({className, buttonText}) {
  return (
    <button className={`px-[85px] py-4 font-bold  text-sm text-white bg-[#262626] ${className}`}>{buttonText}</button>
  )
}

export default Button