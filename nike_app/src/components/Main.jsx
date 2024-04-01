import React from 'react'
import styles from '../../style'
import Button from '../constants/Button'
import { arrowRight } from '../assets/icons'
import '../App.css'
import { statistics } from '../constants'
import { bigShoe1,bigShoe2,bigShoe3 } from '../assets/images/index.js'
import { useState } from 'react'
import { thumbnailBackground } from '../assets/images/index.js'
const Main = () => {

    const [image, setImage] = useState(bigShoe1)
  return (
    <section id='home' className={`px-[150px] max-mdp:px-[100px] max-md:px-[50px] max-ss:px-[20px]  min-h-[87vh] w-full pt-10 flex max-md:flex-col gap-10 max-md:h-fit
    max-md:py-10
    `}>
        <div id='left' className='text-white flex flex-col gap-7 max-ss:gap-3 flex-wrap w-[50%] max-md:w-full'>
            <p className='text-[17px] text-coral-red'>Our Summer Collections</p>
            <div className='text-[55px] leading-[70px] max-ss:text-[40px] max-ss:leading-[55px] font-montserrat font-bold'>
                <span >The New Arrival</span><br />
                <span className='text-coral-red'>Nike </span><span>Shoes</span>
            </div>
            <p className='text-[16px] mb-2'>Discover stylish Nike arrivals,quality <br className='max-ss:hidden'/>comfort and innovation for your active life!</p>
            <Button label="Shop Now!" textsize="text-[16px]" url = {arrowRight} bg = "bg-coral-red"/>
            <div className='mt-3 flex flex-row gap-[60px] max-ss:gap-[20px] flex-wrap'>
                {statistics.map((stat,index) => (
                    <div
                    key={index}
                    className='flex flex-col gap-1 text-white'
                    >
                        <div className='font-extrabold text-[30px] max-ss:text-[25px]'>{stat.value}</div>
                        <div>{stat.label}</div>
                    </div>
                )
                )}
            </div>
        </div>
        <div id='right' className='flex flex-col gap-5 w-[50%] 
        absolute right-0 pr-[150px]
        max-md:relative max-md:pr-0 max-md:w-full
        items-center
        '>
            <div className='h-full w-full flex justify-center items-center'>
                <div className='absolute rounded-[50%] w-[350px] h-[350px] 
                border-[5px] max-md:hidden 
                bg-cover bg-thumbnailBackground
                '></div>
                <img className='w-[500px] h-[400px] z-[1]' src={image} alt="shoes" />
            </div>
            <div id='container' className='flex flex-row gap-3 flex-wrap'>
                <img className={`"bg-gray-500 border-[3px] border-coral-red w-[100px] h-[100px] 
                rounded-[10px] cursor-pointer max-md:w-[170px] max-md:h-[130px] max-ss:max-w-[85px] max-ss:max-h-[70px]"`} src={bigShoe1} alt="big1" onClick={() => setImage(bigShoe1)} />
                <img className={`"bg-gray-500 border-[3px] border-coral-red w-[100px] h-[100px] 
                rounded-[10px] cursor-pointer max-md:w-[170px] max-md:h-[130px] max-ss:max-w-[85px] max-ss:max-h-[70px]"`} src={bigShoe2} alt="big2" onClick={() => setImage(bigShoe2)}/>
                <img className={`"bg-gray-500 border-[3px] border-coral-red w-[100px] h-[100px] 
                rounded-[10px] cursor-pointer max-md:w-[170px] max-md:h-[130px] max-ss:max-w-[85px] max-ss:max-h-[70px]"`} src={bigShoe3} alt="big3" onClick={() => setImage(bigShoe3)}/>
            </div>
        </div>
    </section>
  )
}

export default Main