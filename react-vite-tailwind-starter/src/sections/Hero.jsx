import React from 'react'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons'
import {statistics} from '../constants'
import { bigShoe1 } from '../assets/images'
const Hero = () => {
  return (
    <section id='home' className='w-full  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:sm:px-16 max-xl:px-8 pt-28   '>
        <p className='text-xl font-montserrat text-[#FF8559]'>Our Summer Collections</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[84px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
        <br />
        <span className='text-[#FF8559] inline-block mt-3'>
          Nike 
        </span> Shoes
        </h1>
        <p className='font-montserrat text-slate-400 text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.</p>
          <Button  label="Shop Now" iconURL={arrowRight}/>
          <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
            {statistics.map((stat)=>(
                <div key={stat.label}>
                  <p className='text-4xl font-bold font-palanquin'>{stat.value}</p>
                  <p className='leading-7 font-montserrat text-slate-400'>{stat.label}</p>
                </div>
            ))}
            
          </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-slate-200 bg-cover bg-center'>
        <img src={bigShoe1} alt="shoes collection" width={610} height={500} className='object-contain relative z-10'/>
      </div>
      <div>
            
      </div>
    </section> 
  )
}

export default Hero