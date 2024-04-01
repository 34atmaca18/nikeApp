import React from 'react'

const Button = ({label,url,textsize,bg,height}) => {
  return (
    <button className={`flex flex-row gap-4 items-center w-fit
    px-7 py-4 
    ${textsize} text-white font-bold
    ${bg} hover:bg-white hover:text-coral-red
    rounded-[35px] ${height}`}>
        {label}
        {url && (<img className='h-6 w-6 rounded-full' src={url} alt="icon" />)}
    </button>
  )
}

export default Button