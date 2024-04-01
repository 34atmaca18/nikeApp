import React from 'react'
import Button from '../constants/Button'

const Subs = () => {
  return (
    <div className='px-[150px] max-mdp:px-[100px] max-md:px-[50px] max-ss:px-[20px]  
    h-[50vh] flex justify-between items-center text-white 
    max-md:flex-col max-md:justify-start max-md:h-fit max-md:py-[100px]'>
        <h3 className='text-[40px] max-md:text-center font-extrabold leading-[60px]'>
            Sign Up for<span className='text-coral-red'> Updates<br /></span>& Newsletter
        </h3>
        <div className='max-md:mt-5 bg-white border-[2px] border-gray-500 flex flex-row gap-3 w-[450px] justify-between
        rounded-[50px] relative h-[65px] px-1 py-1 max-ss:w-[100%]
        max-ss:flex-col max-ss:gap-2 max-ss:bg-[#00000000] max-ss:h-fit max-ss:border-none
        '>
            <input type='text' placeholder='subscribe@nike.com' 
            className='placeholder:text-gray-500 pl-3 text-black rounded-[50px] max-ss:h-[60px]' />
            <div className='max-ss:w-full flex max-ss:justify-center max-ss:mt-3'>
                <Button
                textsize="text-[20px] max-ss:text-[15px]" label='Sign Up!' bg="bg-coral-red"/>
            </div>
        </div>
    </div>
  )
}

export default Subs