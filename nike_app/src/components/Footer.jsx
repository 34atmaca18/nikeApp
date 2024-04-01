import React from 'react';
import {instagram,facebook,twitter,copyrightSign} from '../assets/icons/index.js'
import { footerLogo } from '../assets/images/index.js';
import { footerLinks } from '../constants/index.js';

const Footer = () => {
  return (
    <section id='contact' className='px-[150px] max-md:px-[50px] max-ss:px-[20px] w-full
    h-[100vh] max-md:h-fit py-[50px] bg-black text-white relative pb-3
    '>
      <div className='flex flex-col gap-10 justify-between h-full'>
          <div className="ust flex flex-col gap-4">
            <img className='cursor-pointer w-[120px] h-[45px]' src={footerLogo} alt="footerLogo" />
            <p className='text-[16px] max-ss:text-[14px] w-1/3 max-md:w-1/2 max-ss:w-[80%] max-xs:w-full'>
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>
            <div className="flex flex-row gap-2">
              <img className='cursor-pointer w-[42px] h-[42px] max-ss:w-[36px] max-ss:h-[36px] rounded-[50%] bg-white p-2' src={twitter} alt="" />
              <img className='cursor-pointer w-[42px] h-[42px] max-ss:w-[36px] max-ss:h-[36px] rounded-[50%] bg-white p-2' src={facebook} alt="" />
              <img className='cursor-pointer w-[42px] h-[42px] max-ss:w-[36px] max-ss:h-[36px] rounded-[50%] bg-white p-2' src={instagram} alt="" />
            </div>
          </div>
          <div className="flex gap-[120px] flex-wrap max-ss:gap-[40px]">
            {footerLinks.map((section,inn) => (
              <div
              key={inn}
              className='flex flex-col gap-3 max-ss:gap-1.5'
              >
                <h1 className='font-bold text-[24px] max-ss:text-[20px] text-coral-red'>{section.title}</h1>
                <ul>
                  {section.links.map((lin,index) => (
                    <li
                    key={index}
                    className='text-[16px] max-ss:text-[13px] font-semibold'
                    >
                      {lin.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="w-full">
              <div className='flex justify-between items-center'>
                <div className='flex gap-1 items-center'>
                  <img className='w-[22px] h-[22px] max-ss:w-[14px] max-ss:h-[14px]' src={copyrightSign} alt="" />
                  <span className='text-[14px] max-ss:text-[11px]  max-xs:text-[9px] font-semibold'>Copyright. All rights reserved.</span>
                </div>
                <div className='cursor-pointer text-[14px] font-semibold max-ss:text-[11px] max-xs:text-[9px]'>Terms & Conditions</div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Footer