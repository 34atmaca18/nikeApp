import React from 'react'
import { navLinks } from '../constants/index.js'
import { headerLogo } from '../assets/images/index.js'
import { menu,close } from '../assets/icons/index.js'
import { useState } from 'react'
import '../App.css'
import styles from '../../style.js'

const Navbar = () => {
    const [active, setActive] = useState("Home")
    const [show, setShow] = useState(false)

  return (
    <div className={`w-full bg-black h-[100px] px-[150px]  max-mdp:px-[100px] max-md:px-[50px] max-ss:px-[20px] `}>
        <header className='h-full'>
            <nav className='w-full flex justify-between h-full items-center'>
                <img  className='w-[130px] h-[30px]' src={headerLogo} alt="nikeLogo" />
                <ul className={`flex gap-4
                max-md:absolute max-md:right-0 max-md:top-0 max-md:h-full max-md:bg-black max-md:flex-col
                max-md:w-full max-md:items-center max-md:justify-center max-md:gap-10 z-[10]
                ${show ? 'max-md:flex' : 'max-md:hidden'}
                `}>
                    {navLinks.map((nav,index) => (
                        <li
                        key={index}
                        ><a 
                        className={`text-[18px] 
                        font-montserrat font-bold max-md:text-[23px] min-xl:text-[25px] 
                        ${active === nav.label ? 'text-coral-red' : 'text-white'}`}
                        href={nav.href}
                        onClick={() => setActive(nav.label)}
                        >{nav.label}</a></li>
                    ))}
                </ul>
                <img className={`absolute hidden right-[50px] max-md:block max-ss:right-[20px] h-[30px] w-[30px] cursor-pointer z-[10]`}
                src={`${show ? close : menu }`} 
                alt="openclose" 
                onClick={() => setShow(!show)}
                />
            </nav>
        </header>
    </div>
  )
}

export default Navbar