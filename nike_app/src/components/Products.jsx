import React from 'react'
import Button from '../constants/Button'
import { arrowRight } from '../assets/icons'
import { shoe8 } from '../assets/images'

const Products = () => {
  return (
    <section id='products' className='px-[150px] max-mdp:px-[100px] max-md:px-[50px] max-ss:px-[20px] h-[100vh] text-white
    flex gap-2 pt-[100px] max-mdp:py-10 max-md:py-[100px] max-md:flex-col w-full max-md:gap-5 max-md:h-fit
    '>
      <div id="left" className='h-full w-1/2 flex flex-col gap-5 justify-center max-md:justify-start max-md:h-fit max-md:w-full'>
          <h2 className='mt-[-150px] max-md:mt-0 capitalize text-[33px] font-bold'>
            We Provide You
            <span className='text-coral-red'> Super<br /></span>
            <span className='text-coral-red'>Quality </span> Shoes
          </h2>
          <p className='lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
          </p>
          <div className=''>
            <Button label='View details' url={arrowRight} bg = "bg-coral-red" />
          </div>
      </div>
      <div id="right" className='h-full max-md:h-fit w-1/2 flex items-center max-md:items-start max-md:w-full'>
        <img className="mt-[-100px] max-md:mt-0 min-w-[500px] min-h-[400px] max-md:ml-[-30px] 
        max-ss:ml-[-10px] max-ss:min-w-[250px] max-ss:min-h-[250px]" src={shoe8} alt="shoe" />
      </div>
    </section>
  )
}

export default Products