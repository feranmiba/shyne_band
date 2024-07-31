import React from 'react'
import { Outing, FineGirl, Night, HighLife, Uni, WideBlackGirl, FullHome, Dot } from '../utils/Datas'
import { BsArrowRight } from 'react-icons/bs'

function Gallery() {
  return (
    <div>
    <section className='flex justify-end items-end px-4 sm:px-8 md:px-12 lg:px-24 py-10 text-black'>
    <section>
      <div className='text-left mb-10'>
        <p className='uppercase font-sedan text-base sm:text-lg md:text-xl'>Our Gallery</p>
        <p className='font-space font-bold text-2xl sm:text-3xl md:text-5xl py-4'>Explore Our Visual Journey</p>
      </div>
  
      <div className='flex flex-wrap md:flex-nowrap md:w-[45%] gap-2'>
     <img src={Night} className='w-[48%] sm:w-[30%] md:w-[60%]  object-contain' alt='Night' />
      <img src={FineGirl} className='w-[48%] sm:w-[30%] md:w-[60%]  object-contain' alt='FineGirl' />
     <img src={Outing} className='w-full z-50 sm:w-[30%] md:w-[100%]  object-contain' alt='Outing' />
     <img src={Dot} alt='dot' className='max-w-[80px] md:max-w-[150px] z-10 right-12 absolute -translate-y-1/3   object-contain'/>
     </div>


  
      <div className='flex flex-col sm:flex-row gap-2 mt-2'>
        <div className='w-full sm:w-[50%]'>
          <img src={HighLife} className='w-full object-contain' alt='High Life' />
        </div>
  
        <div className='w-full sm:w-[70%]'>
  <div className='flex gap-3'>
    <div className='flex flex-col w-full sm:w-[100%]'>
      <img src={WideBlackGirl} className='w-full object-contain' alt='Black Girl' />
    </div>
    <div className='flex flex-col w-full sm:w-[80%]'>
      <img src={Uni} className='w-full object-contain' alt='Uni' />
    </div>
  </div>
  <div className='w-full mt-4'>
    <img src={FullHome} className='w-full object-contain' alt='Home Pic' />
  </div>
</div>

      </div>
    </section>


   
    </section>
    <div className='text-black flex justify-center mb-16'>
    <button className='border-[1px] border-black px-3 py-4 rounded-lg uppercase font-sedan flex gap-1'>Check out more moment <BsArrowRight className='text-2xl'/> </button>
    </div>
  </div>
  
  )
}

export default Gallery