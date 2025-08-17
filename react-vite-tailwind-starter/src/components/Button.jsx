import React from 'react'

const Button = ({label,iconURL}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none border-[#FF8559] bg-[#FF8559] rounded-full text-white'>
        {label}
        {iconURL && <img src={iconURL} alt="arrow right icon" className='ml-2 rounded-full w-5 h-5 ' />}
    </button>
  )
}

export default Button