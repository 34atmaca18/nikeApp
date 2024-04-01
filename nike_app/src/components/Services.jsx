import React from 'react'
import { services } from '../constants/index.js'

const Services = () => {
  return (
    <section
    className='px-[350px] max-lg:px-[200px] w-full max-mdp:px-[100px] max-md:px-[50px] max-ss:px-[20px] h-[60vh] text-white 
    max-md:h-fit py-[100px]'
    >
        <ul className='flex w-full flex-wrap gap-5 justify-center items-center h-full'>
            {services.map((ser,index) => (
                <li
                key={index}
                className='w-[250px] h-[250px] max-ss:w-full py-10 flex flex-col border-[2px] border-coral-red px-5 rounded-[50px]'
                >
                    <img className='w-[30px] h-[30px]' src={ser.imgURL} alt="altlogo" />
                    <h1 className='mt-1 text-[20px] max-ss:text-[25px] font-extrabold text-coral-red'>{ser.label}</h1>
                    <p className='mt-2 text-[14px] max-ss:text-[16px]'>
                        {ser.subtext}
                    </p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Services