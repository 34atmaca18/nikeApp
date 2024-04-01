import React from 'react'
import styles from '../../style'
import { products } from '../constants'
import { star } from '../assets/icons'

const About = () => {
  return (
    <section id='about' className={`px-[150px] max-mdp:px-[90px] max-md:px-[50px] w-full max-ss:px-[20px] 
    h-[100vh]pt-[100px] text-white max-mdp:h-fit max-mdp:py-[100px]`}>
        <div className='flex flex-col gap-5'>
            <h1 className='text-[33px] font-bold'>
                <span>Our </span><span className='text-coral-red'>Popular </span><span>Products</span>
            </h1>
            <p className='text-[14.5px] w-[450px] max-ss:w-fit'>Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design and value!</p>
            <ul id='container'
            className='flex flex-start justify-between max-md:justify-start w-full mt-6 flex-wrap gap-9'
            >
                {products.map((p,index) => (
                    <li
                    key={index}
                    className='flex flex-col gap-2'
                    >
                        <img className='w-[200px] h-[200px]' src={p.imgURL} alt="img" />
                        <div className='flex gap-1.5 items-center'>
                            <img src={star} alt='rating' width={17} height={17} />
                            <p className='text-[15px]'>
                            (4.5)
                            </p>
                        </div>
                        <h1 className='font-semibold text-[17px] h-5'>{p.name}</h1>
                        <p className='font-semibold text-[14px] text-[#ff4444]'>{p.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default About