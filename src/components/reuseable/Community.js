import React from 'react'
import { Baba, One, Two, Three, Four, Five, Six, Seven, Eight } from '../utils/Datas'
import { BsArrowRight } from 'react-icons/bs'


function Community() {
  return (
    <div className="flex justify-center my-20">
    <section className="bg-[#ffff] text-black pb-10 w-full">
      <section className="px-4 sm:px-14 lg:px-20 pt-14 flex justify-center">
        <div className="flex flex-col  justify-center gap-5 lg:flex-row items-center text-center w-full max-w-7xl">
  
          <div className="relative flex md:flex-col md:flex-nowrap flex-wrap items-center gap-5 justify-center mb-10 lg:mb-0">
            <img src={One} alt="Blur Girl 1" className="w-[50%] lg:w-[55%]" />
            <div className="relative transform lg:-translate-x-14">
              <img src={Two} alt="Blur Girl 2" className="w-[75%] lg:w-[100%]" />
            </div>
            <img src={Three} alt="Blur Girl 3" className="w-[75%] lg:w-[60%]" />
            <div className="relative transform lg:-translate-x-14">
              <img src={Four} alt="Blur Girl 2" className="w-[75%] lg:w-[50%]" />
            </div>
          </div>

          <div className='items-center justify-center flex'>
  
          <div className="mt-10 w-full text-center lg:w-[600px] lg:mt-0">
            <p className="font-sedan uppercase">Our Reviews</p>
            <p className="font-space text-2xl md:text-3xl lg:text-4xl font-bold mt-3">What our community says About Us</p>
            <p className="font-space mt-4 text-lg border py-3 px-5 md:mt-8 leading-6 md:leading-10">
              <b className='text-6xl'>“</b>Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn’t used, which have also proved to be easy to use and reliable.
            </p>
          </div>
          </div>
  
          <div className="relative flex flex-col gap-5 justify-end mt-10 lg:mt-0 lg:justify-end items-center">
            <img src={Five} alt="Blur Girl 1" className="w-[50%] lg:w-[40%] transform lg:translate-x-10" />
            <div className="relative transform xl:-translate-x-6 lg:translate-x-10">
              <img src={Six} alt="Blur Girl 2" className="w-[75%] lg:w-[70%]" />
            </div>
            <img src={Seven} alt="Blur Girl 3" className="w-[75%] lg:w-[40%]" />
            <img src={Eight} alt="Blur Girl 3" className="w-[75%] lg:w-[50%] transform lg:translate-x-10" />
          </div>
        </div>
      </section>
    </section>
  </div>
  
  )
}

export default Community