import React from 'react'
import { reviews } from '../constants/index.js'
import { star } from '../assets/icons'

const Reviews = () => {
  return (
    <section className='px-[150px] max-mdp:px-[100px] max-md:px-[50px] max-ss:px-[20px]
    h-[100vh] text-white py-[100px]
    max-md:h-fit
    '>
        <div className='flex flex-col gap-3'>
            <h3 className='font-bold text-center text-[40px]'>
                What Our
                <span className='text-coral-red'> Customers </span>Say?
            </h3>
            <div className='flex justify-center'>
                <p className='w-[500px] text-center max-md:w-[400px] max-ss:w-[300px]'>
                    Hear genuine stories from our satisfied customers about their
                    exceptional experiences with us.
                </p>
            </div>
            <ul className='mt-[80px] w-full flex justify-center gap-[200px] max-md:flex-col max-md:justify-start max-md:gap-[50px]'>
                {reviews.map((rev,index) => (
                    <li
                    key={index}
                    className='flex flex-col gap-2 w-[300px] h-fit px-[20px] max-md:w-full'
                    >
                        <div className='w-full flex justify-center'>
                            <img className='w-[100px] h-[100px] rounded-[50%]' src={rev.url} alt="kisi" />
                        </div>
                        <div className='w-full flex justify-center'>
                            <p className='text-center w-[300px] max-ss:w-full text-[12.5px] max-md:text-[15px]'>{rev.feedback}</p>
                        </div>
                        <div className='w-full flex justify-center gap-2'>
                            <img
                            src={star}
                            alt='star'
                            className='w-[30px] h-[30px]'
                            />
                            <p className='text-[20px] relative top-[2px]'>{rev.rating}</p>
                        </div>
                        <h3 className='text-[20px] text-center font-extrabold'>
                            {rev.name}
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Reviews