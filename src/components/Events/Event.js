import React, { useEffect } from 'react'
import EventPic from '../utils/image/Events.png'
import Big from '../utils/image/Big Concert 1.png'
import { BsArrowRight } from 'react-icons/bs';
import { Eventss } from '../utils/Datas';
import { Outing, FineGirl, Night, HighLife, Uni, WideBlackGirl,  Video01, Video02, Video03, FullHome, Dot } from '../utils/Datas'
import { Route, Routes, Link } from 'react-router-dom';
import Igbo from './Igbo';
import { Outlet, useLocation } from 'react-router-dom';



function Event() {

  const Location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>  
    <Outlet />
 {Location.pathname === '/event' &&  (  <section>
    <section className="relative w-full h-screen">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[#1E1E1E] z-20 opacity-50"></div>
    <img src={EventPic} alt="home" className="w-full h-full object-cover" />
  </div>

  <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center text-[#FFFFFF] font-space">
    <p className="text-lg mb-7 font-sedan">ABOUT SHYNE BAND</p>
    <p className="text-xl font-sedan font-thin mb-5 sm:text-2xl md:text-3xl lg:text-6xl md:w-[850px] px-4 lg:px-0">
      Experience Shyne Band Live: Events That Resonate
    </p>
    <p className="text-base md:text-xl mt-2 md:w-[950px] leading-8 md:leading-10">
      Join us at our upcoming shows and feel the energy of Sonic Pulse's unforgettable live performances. Don't miss out on the music and moments that define our journey.
    </p>
    <div className="absolute bottom-5 flex justify-center w-full">
      <p className="font-space">Explore our events</p>
    </div>
  </div>
    </section>


      
  <section className='px-3 sm:px-10 md:px-24 py-10 text-black'>
  <section>
  <div>
  <p className='font-sedan py-5'>ABOUT SHYNE BAND</p>
  <h1 className='text-3xl md:text-5xl font-bold font-space pb-3'>Catch Us Live</h1>
  <p className='text-base md:text-lg leading-10'>Experience the Magic of Shyne band on Stage</p>
  </div>

  <div>
  <div className='flex flex-wrap md:flex-nowrap gap-5 font-space mt-5'>
  <button className='bg-black text-white px-10 py-3 rounded-lg text-base md:text-xl'>All Events</button>
  <button className='border px-10 py-3 rounded-lg text-base md:text-xl'>Upcoming Events</button>
  <button className='border px-10 py-3 rounded-lg text-base md:text-xl'>Past Events</button>
  </div>

  <div className='flex justify-center flex-wrap-reverse md:flex-nowrap md:justify-between font-space bg-black text-white py-14 px-5 md:px-10 rounded-xl mt-8'>
  <div className='md:w-[60%]'>
  <h1 className='font-bold text-2xl md:text-3xl'>The Big Concert</h1>
  <p className='py-3 text-[#65676C] '>August 5, 2024</p>
  <p className='leading-8 md:leading-10 text-sm'>The Big Concert is an exclusive annual event organized by Shyne Band, one of Nigeria's best live band groups and Abuja's finest. This premium event aims to reimagine and modernize classic songs from music legends, making them relatable to contemporary audiences. This year's proposed theme is Igbo Highlife music, celebrating the timeless songs of the Oriental Brothers. With performances by Chike, Timi Dakolo, and Shyne Band, this event promises to breathe new life into these beloved tunes while creating an atmosphere of luxury and sophistication.</p>
  <Link to="igbo"><button className='flex gap-2 mt-3 font-sedan text-xl'>Read more <BsArrowRight className='text-xl mt-1'/> </button></Link>
  </div>



  <p>
  <img src={Big} alt='big' className='w-[80%]'/>
  </p>
  </div>
  </div>



  <section className='flex flex-wrap gap-5 mt-10 '>
  {Eventss.map((event) => ( <div className='md:w-[32%] bg-[#121212] py-5 text-white px-6 font-space rounded-xl'>
  <img src={event.img} alt='fine' className='rounded-xl' />
  <h1 className='pt-5 text-xl font-bold '>{event.title}</h1>
  <p className='pt-1 pb-2 text-sm text-[#65676C]'>{event.date}</p>
  <p className='text-sm leading-6'>{event.desctiption}</p>
  <button className='flex gap-2 pt-5 py-3 font-sedan text-base'>Get Tickets <BsArrowRight className='text-xl mt-1'/> </button>
  </div>))}
  </section>
  </section>


  </section>


    <section className='px-3 md:px-16 mt-10 bg-black pt-16 pb-24'>

    <div>
    <h1 className='font-sedan text-xl'>Our  events gallery</h1>
    <p className='mt-5 font-space text-3xl font-bold'>Relive the Magic: Shyne Band in Action</p>
    </div>



    <section>
    <div className='flex flex-wrap md:flex-nowrap justify-between my-14'>
    <img src={Video01} alt='/' className='md:max-w-[300px] object-contain z-50'/>
    <img src={Video02} alt='vid2' className='md:max-w-[300px] object-contain' />
    <img src={Video03} alt='vid3' className='md:max-w-[300px] object-contain' />
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

    </section>)}


</div>
  )
}




export default Event