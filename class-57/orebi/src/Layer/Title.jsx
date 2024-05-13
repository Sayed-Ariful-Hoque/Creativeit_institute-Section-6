import React from 'react'

function Title({TiteleText, className}) {
  return (
    <h3 className={`font-DMSans font-bold text-[39px] text-[#262626] mb-12 ${className}`}>{TiteleText}</h3>
  )
}

export default Title