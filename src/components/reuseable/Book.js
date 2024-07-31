import React from 'react'
import { Baba, Long, NightLife, BlurGirl, Concert, SecondBlur } from '../utils/Datas'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Book() {
  return (
    <div>
    <section className="bg-[#000000] pt-14">
      <section className="px-4 sm:px-14 lg:px-40 pt-14">
        <div className="flex flex-col lg:flex-row items-center  text-center">

          <div className="relative flex flex-col items-center gap-5 justify-between mb-10 lg:mb-0">
            <img src={BlurGirl} alt="Blur Girl 1" className="w-[50%] lg:w-[55%] hidden md:block" />
            <div className="relative transform lg:-translate-x-14">
              <img src={Long} alt="Blur Girl 2" className="w-[75%] lg:w-[100%]" />
            </div>
            <img src={NightLife} alt="Blur Girl 3" className="w-[75%] lg:w-[100%]" />
          </div>
  
          <div className="w-full sm:w-[600px] lg:w-full mt-10 lg:mt-0">
            <p className="font-sedan uppercase">Connect with us</p>
            <p className="font-space text-2xl md:text-3xl lg:text-4xl font-bold mt-3">Book Us for Your Event</p>
            <p className="font-inter mt-4 md:mt-8 leading-6 md:leading-7">
              Looking to elevate your event with an unforgettable musical experience? Contact us to book Shyne band for your next festival, corporate gathering, or private party.
            </p>
            <div className='flex justify-center' >
              <Link to="/contact"><button className='border py-2 px-5 rounded-lg font-sedan text-2xl text-white mt-10 flex gap-2'>Contact us <BsArrowRight className='text-2xl mt-1'/> </button></Link>
            </div>
          </div>
  
 
          <div className="relative flex flex-col gap-5 justify-between mt-10 lg:mt-0">
            <img src={Baba} alt="Blur Girl 1" className="w-[50%] lg:w-[70%]" />
            <div className="relative transform lg:translate-x-10 ">
              <img src={Concert} alt="Blur Girl 2" className="w-[75%] lg:w-[100%]" />
            </div>
            <img src={SecondBlur} alt="Blur Girl 3" className="w-[75%] lg:w-[100%] hidden md:block" />
          </div>
        </div>
      </section>
    </section>
  </div>
  
  )
}

export default Book