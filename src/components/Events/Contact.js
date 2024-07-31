import React from 'react'


function Contact() {
  return (
    <div>
    <section className='bg-[#1E1E1E] px-3 md:px-24 py-14 pb-40'>

    <section className='flex justify-center text-center'>
      <div className='w-[80%]'>
    <h1 className='font-sedan text-2xl'>Contact Us</h1>
    <p className='font-sedan text-3xl md:text-4xl py-5'>Get in touch with us</p>
    <p className='font-space leading-10'>Reach out for bookings, inquiries, or just to say hello. We’re here to make your experience unforgettable and are excited to hear from you</p>
    </div>
    </section>
    </section>

    <section className='px-3 sm:px-32 md:px-52 lg:px-72 transform -translate-y-24 '>
        <form className='text-white bg-black px-5 py-7 font-space rounded-xl'>
        <div>
        <label>Name</label>
        <p className='border p-3 w-[100%] mt-2'><input type='text' placeholder='Enter your name' className='px-3 py-2 w-[80%] outline-none bg-transparent' /> </p>
        </div>

        <div className='mt-5'>
        <label>Email Address</label>
        <p className='border p-3 w-[100%] mt-2'><input type='text' placeholder='Enter your email' className='px-3 py-2 w-[80%] outline-none bg-transparent' /> </p>
        </div>

        <div className='mt-10'>
        <label>Name</label>
        <p className='border p-3 w-[100%] h-[50vh] mt-2'><input type='text' placeholder='Your Message' className='px-3 py-2 w-[80%] outline-none bg-transparent' /> </p>
        </div>
        
        
        
        
        
        </form>






    </section>
    
    </div>
  )
}

export default Contact