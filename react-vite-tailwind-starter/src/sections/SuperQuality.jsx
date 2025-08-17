import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container '>
      <div className='flex flex-1 flex-col '>
        <h2 className="mt-10 font-palanquin capitalize text-4xl max-sm:text-[72px] max-sm:leading-[84px] font-bold lg:max-w-lg ">
          We Provide You
          
          <span className="text-[#FF6452] ">Super</span>
          <span className="text-[#FF6452] ">Quality</span>Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7">
         Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.        </p>
        <p className='mt-6 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11 '>
          <Button label="view details"/>
        </div>

      </div>
      <div className='flex-1 flex justify-center items-center '>
        <img src={shoe8} alt="shoe" width={570} height={522} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality