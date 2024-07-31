import React from 'react'
import Logo from './utils/image/SHYNE BAND_page-0001 1.png'

function Fotter() {
  return (

    <div>

    <div className='border-t-[1px] bg-[#ffffff] text-black not-italic font-readex '>
    <footer className=' py-28 px-3 md:px-20 flex justify-between flex-wrap lg:flex-nowrap gap-10 lg:gap-0'>


    <div>
    <img src={Logo} alt='logo' />
    <p className=' md:w-[424px] font-space font-light leading-8 mt-7'>Transform your event with Shyne Band dynamic live performances, professional music production, and innovative collaborations</p>
    </div>

    <div className='mt-10'>
    <p className='text-xl font-bold'>Company</p>
    <ul className='flex flex-col font-space gap-10 mt-5'>
    <li>Home</li>
    <li>About us</li>
    <li>Services</li>
    <li>Events</li>
    </ul>
    </div>

    <div className='mt-10'>
    <p className='text-xl font-bold'>Contact</p>
    <ul className='flex font-space flex-col gap-10 mt-5'>
    <li>1498w Fluton ste, STE <br />
    2D Chicgo, IL 63867.</li>
    <li> (123) 456789000</li>
    <li>info@shyneband.io</li>
    </ul>
    </div>


    <div className='mt-10'>
    <p className='text-xl font-bold'>Social</p>
    <ul className='flex font-space flex-col gap-10 mt-5'>
    <li>Instagram </li>
    <li> LinkedIn</li>
    <li> Youtube</li>
    <li> Twitter</li>
    </ul>
    </div>
    </footer>


    <section className='border-t-[1px]'>
    <div className='px-10 py-10 flex flex-wrap gap-10 lg:flex-nowrap lg:gap-0 justify-between font-space'>
    <p>
    ©2024 shyneBand. All rights reserved
    </p>

    <p>Privacy Policy | Terms & Conditions | Cookies Policy  | Map</p>

    </div>
    
    </section>
      
    </div>
    </div>
  )
}

export default Fotter