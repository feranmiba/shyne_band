import React from 'react'
import ServicePic from '../utils/image/Service.png'
import Vector from '../utils/image/Vector.png'
import { FullConcert, Dot, Dots, VectorWhite, FineGirl, Special, Star, Topp } from '../utils/Datas'
import Community from '../reuseable/Community'
import Book from '../reuseable/Book'

function Service() {
  return (
    <div> 
     <section className="relative w-full h-screen">

    <div className="absolute inset-0">
    <div className='absolute inset-0 bg-[#1E1E1E] z-30 opacity-50'></div>
    <img src={ServicePic} alt='home' className='w-full h-full object-cover ' />
    </div>

    <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center text-[#FFFFFF] font-space">
    <p className='text-lg mb-7 font-sedan'>OUR SERVICES</p>
    <p className='text-xl font-sedan font-thin mb-5  h-[100px]  sm:text-2xl md:text-3xl lg:text-6xl md:w-[850px] px-4 lg:px-0'>
    Transform Your Event with SHYNE BAND Unique Sound
    </p>
    <p className='text-base md:text-xl md:mt-2 md:w-[950px] leading-8 md:leading-10'>At Shyne Band, we offer a range of services designed to bring exceptional music experiences to any event or occasion. Whether you're looking for live performances, custom music production, or special appearances, our talented band members are here to make your event unforgettable. </p>
    </div>
    
    
    </section>



    <section className='text-black px-3 sm:px-10 md:px-24 mt-24'>

    <section className='flex flex-wrap justify-center md:justify-between  md:flex-nowrap gap-10'>
    <div className='md:w-[60%] mt-10'>
    <img src={Vector} alt="ohh" />
    <p className='font-bold font-space py-5 text-3xl md:text-4xl'>Live Performance</p>
    <p className='font-space leading-8'>Shyne band was formed in [Year] by a group of friends who shared a common dream: to make music that resonates with people from all walks of life. From humble beginnings playing in local venues, we’ve grown into a band that’s known for our dynamic performances and innovative music. Over the years, we’ve toured extensively, released critically acclaimed albums, and built a loyal fanbase around the world.</p> 
    </div>


    <div className='flex justify-center md:justify-between'>
    <img src={FullConcert} alt='top' className=' sm:max-w-[300px] md:max-w-[340px] z-50 object-contain' />
    <img src={Dot} alt='dot' className='max-w-[150px] right-24 absolute -translate-y-1/4 z-20  object-contain'/>
    </div>
    </section>
    </section>


    <section className='text-white bg-black px-3 sm:px-10 md:px-24 mt-24'>

    <section className='flex justify-center md:justify-between flex-wrap md:flex-nowrap gap-10 py-24'>
    <div className='flex justify-between'>
   <img src={FineGirl} alt='top' className=' md:max-w-[500px] z-50 object-contain' />
    <img src={Dots} alt='dot' className='max-w-[150px] left-16 absolute -translate-y-1/4 z-20  object-contain'/>
    </div>


    <div className='md:w-[60%]'>
    <img src={VectorWhite} alt="ohh" />
    <p className='font-bold font-space py-5 text-3xl md:text-4xl'>Custom Music Production</p>
    <p className='font-space leading-8'>Looking for original music for a special project? Our band offers custom music production services, including songwriting, composition, and full studio recording. Whether you need a theme song for your brand, a soundtrack for a film, or a unique track for a special event, we can create music that perfectly fits your vision.</p> 
    </div>
    </section>
    </section>



    <section className='text-black px-3 sm:px-10 md:px-24 mt-24'>

    <section className='flex justify-center md:justify-between flex-wrap md:flex-nowrap gap-10 pt-10'>
    <div className='md:w-[60%] md:mt-10'>
    <img src={Vector} alt="ohh" />
    <p className='font-bold font-space py-5 text-3xl md:text-4xl'>Special Appearances & Collaborations</p>
    <p className='font-space leading-8'>Add a touch of star power to your event with special appearances and collaborations. Sonic Pulse is available for guest performances, interviews, and collaborative projects. Whether you want a feature performance at your concert or a collaboration on a new track, we bring creativity and professionalism to every engagement.</p> 
    </div>


    <section>
    <div className='flex justify-between gap-5 md:gap-0'>
    <img src={Special} alt='top' className='w-[80%] md:max-w-[400px] z-50 -translate-x-2 md:-translate-x-8  md:-translate-y-10 object-contain' />
    <img src={Dot} alt='dot' className='max-w-[100px] md:max-w-[150px] right-24 absolute -translate-y-6 md:-translate-y-16 z-20  object-contain'/>
    </div>
    <img src={Star} alt='ww' className='w-[80%] md:max-w-[400px] object-contain translate-x-6 ' />
    </section>


    </section>
    </section>



    <section className='text-white bg-black px-3 sm:px-10 md:px-24 mt-24'>

    <section className='flex justify-center md:justify-between flex-wrap md:flex-nowrap gap-10 py-24'>
    <div className='flex justify-between'>
    <img src={Topp} alt='top' className='md:max-w-[500px] z-50 object-contain' />
    <img src={Dots} alt='dot' className='max-w-[100px] md:max-w-[150px] left-16 absolute -translate-y-1/4 z-20  object-contain'/>
    </div>


    <div className='md:w-[60%]'>
    <img src={VectorWhite} alt="ohh" />
    <p className='font-bold font-space py-5 text-3xl md:text-4xl'>Music Mentorship </p>
    <p className='font-space leading-8'>Take your musical skills to the next level with private lessons from our band members. We offer one-on-one instruction in vocals, guitar, bass, drums, and keyboard. Our lessons are personalized to meet your needs, helping you develop your technique, style, and confidence as a musician.</p> 
    </div>
    </section>
    </section>



    <Community />

    <Book />
    
    
    
    </div>
  )
}

export default Service