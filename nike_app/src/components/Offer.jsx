import React from 'react'
import { offer } from '../assets/images'
import Button from '../constants/Button'
import { arrowRight } from '../assets/icons'

const Offer = () => {
  return (
    <section className='w-full h-[100vh] bg-black text-white 
    px-[150px] max-mdp:px-[100px] max-md:px-[50px] max-ss:px-[20px] py-[100px]
    flex max-mdp:flex-col gap-5 max-mdp:h-fit'>
        <div className="h-full w-1/2 flex justify-center max-mdp:justify-start max-mdp:w-full">
            <img className='w-[400px] h-[500px]' src={offer} alt="offer" />
        </div>
        <div className="h-full w-1/2 max-mdp:w-full flex flex-col gap-3 justify-center">
            <h2 className='mt-[-50px] max-mdp:mt-0 text-[33px] font-extrabold'>
                <span className='text-coral-red'>Special </span>Offer
            </h2>
                <p className='text-[16px]'>
                Embark on a shopping journey that redefines your experience with
                unbeatable deals. From premier selections to incredible savings, we
                offer unparalleled value that sets us apart.
                </p>
                <p className='text-[16px]'>
                Navigate a realm of possibilities designed to fulfill your unique
                desires, surpassing the loftiest expectations. Your journey with us is
                nothing short of exceptional.
                </p>
                <div className='mt-5 flex flex-wrap gap-4'>
                <Button label='Shop Now!' bg = "bg-coral-red"/>
                <Button
                    label='Learn More!'
                    url={arrowRight}
                    bg = "bg-gray-600"
                />
            </div>
        </div>
     </section>
  )
}

export default Offer