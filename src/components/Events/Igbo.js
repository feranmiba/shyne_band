import React, { useEffect } from 'react'
import Big from '../utils/image/Big Concert 1.png'
import August from '../utils/image/ph_calendar-light.png'
import Chike from '../utils/image/Chike,_Potrait..png'
import Timi from '../utils/image/timi.png'
import Shyne from '../utils/image/Shyne_Band.png'
import { BiSolidLocationPlus } from 'react-icons/bi'

function Igbo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <section className='bg-[#1E1E1E] px-3 md:px-24 py-14 pb-40'>
    <div className='flex justify-center flex-wrap-reverse md:flex-nowrap md:justify-between font-sedan '>

    <div className='flex flex-col gap-3 w-[700px]'>
    <p className='text-white'>Events</p>
    <p className='text-3xl '>The Big Concert</p>

    <p>Theme</p>

    <h1 className='text-3xl md:text-4xl'>Igbo Highlife Music, featuring the Oriental Brothers</h1>

    <div className='flex gap-10 flex-wrap md:flex-nowrap  text-xl'>
    <p className='flex'>
    <p><img src={August} alt='big' className='w-[80%]'/></p>
    <p className='mt-2'>November 2024</p>
    </p>

    <p className='flex'> <BiSolidLocationPlus />   Transcorp Hilton</p>
    </div>

    <p>Get tickets7</p>

    </div>
    <p>
    <img src={Big} alt='big' className='w-[80%]'/>

    </p>
    </div>

    </section>
 
    <section className='text-black py-14 px-3 md:px-24'>
    <p className='text-3xl font-sedan'>About the Big Concert</p>
    <p className='font-space leading-10 pt-5'>The Big Concert is an exclusive annual event organized by Shyne Band, one of Nigeria's best live band groups and Abuja's finest. This premium event aims to reimagine and modernize classic songs from music legends, making them relatable to contemporary audiences. This year's proposed theme is Igbo Highlife music, celebrating the timeless songs of the Oriental Brothers. With performances by Chike, Timi Dakolo, and Shyne Band, this event promises to breathe new life into these beloved tunes while creating an atmosphere of luxury and sophistication.</p>
    <button className='text-white bg-black mt-2 px-5 py-3 rounded-md font-sedan'>Get Your Pass</button>
    </section>


    <section className='bg-[#181818] font-sedan px-3 md:px-20 py-16'>
    <h1 className='text-3xl mt-14'>Performing Artist at the big Concert</h1>


    <div className='flex justify-between flex-wrap md:flex-nowrap gap-5 font-space text-2xl py-5'>
    <div>
    <p> <img src={Chike} alt='kkk' className='object-contain w-[100%]'/></p>
    <h1 className='py-5'>Chike</h1>
    </div>
    <div>
    <p> <img src={Timi} alt='kkk' className='object-contain w-[100%]'/></p>
    <h1 className='py-5'>Timi Dakolo</h1>
    </div>
    <div>
    <p> <img src={Shyne} alt='kkk' className='object-contain w-[100%]'/></p>
    <h1 className='py-5'>The Shyne Band</h1>
    </div>
    </div>
    
    
    </section>
    </div>
  )
}

export default Igbo