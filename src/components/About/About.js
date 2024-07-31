import React, { useEffect } from 'react'
import AboutPic from '../utils/image/About.png'
import Community from '../reuseable/Community'
import Team from '../reuseable/Team'
import Gallery from '../reuseable/Gallery'
import { FullConcert, OutingGuys, HighLife, FullPic, Teame, Topp } from '../utils/Datas'
import VectorBlack from '../utils/image/Vector (2)Black.png'
import Book from '../reuseable/Book'

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div> 
     <section  className="relative w-full h-screen">

    <div className="absolute inset-0">
    <div className='absolute inset-0 bg-[#1E1E1E] z-20 opacity-50'></div>
    <img src={AboutPic} alt='home' className='w-full h-full object-cover ' />
    </div>

    <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center text-[#FFFFFF] font-space">
    <p className='text-lg mb-7 font-sedan'>ABOUT SHYNE BAND</p>
    <p className='text-2xl font-sedan font-thin mb-5  sm:text-2xl md:text-3xl lg:text-6xl md:w-[850px] px-4 lg:px-0'>
    Unleashing the Sound of SHYNE BAND
    </p>
    <p className='text-base md:text-xl mt-2 md:w-[950px] leading-8 md:leading-10'>At Shyne Band we believe in the power of music to connect, inspire, and transform lives. Our band is dedicated to creating memorable experiences through our unique blend of sound, energy, and passion. Here’s a glimpse into who we are and what drives us.</p>
    </div>
    
    
    </section> 


    <section className='px-3 sm:px-10 md:px-24 py-10 text-black'>

    <section className='flex justify-center text-center'>
      <div>
      <h1 className='uppercase font-sedan'>Our journey</h1>
      <p className='font-space font-bold py-5 text-3xl md:text-5xl'>The Beginning Of Shyne Band</p>
      <p className='font-space leading-10 text-base md:text-lg text-left'>Shyne band was formed in [Year] by a group of friends who shared a common dream: to make music that resonates with people from all walks of life. From humble beginnings playing in local venues, we’ve grown into a band that’s known for our dynamic performances and innovative music. Over the years, we’ve toured extensively, released critically acclaimed albums, and built a loyal fanbase around the world.</p>
     
      <div className="flex flex-wrap gap-4 mt-10 md:mt-0">
      <img src={HighLife} alt="out" className=" md:w-[32%] sm:w-full object-contain" />
      <img src={OutingGuys} alt="outguy" className=" md:w-[32%] sm:w-full object-contain md:mt-20" />
      <img src={FullConcert} alt="full" className=" md:w-[32%] sm:w-full object-contain" />
    </div>
      </div>  
    </section>

    </section>



    <section className='px-3 sm:px-10 md:px-24 pt-14 mt-5 bg-black'>
    <section className='flex justify-center text-center'>
    <div>
    
    <h1 className='uppercase font-sedan'>Our Vision</h1>
    <p className='font-space font-bold py-5 text-3xl md:text-5xl'>Inspiration and Creativity</p>
    <p className='text-[#aba6a6] font-inter'>What drives the band's creative process and the sources of their musical inspiration.</p>
    <p className='font-space leading-8 mt-8 md:text-lg text-left text-base'>Shyne Band  thrives on the fusion of diverse musical influences and personal experiences. We draw inspiration from the world around us, infusing our music with authenticity and emotion. Our creative process is a journey of constant exploration, seeking to innovate and push the boundaries of traditional genres.We strive to create music that not only entertains but also resonates on a deeper level. Our songs are often inspired by personal experiences, social issues, and the world around us. We aim to spark conversations, evoke emotions, and bring people together through our art.</p>
   

    <div className='flex mt-10'>
    <img src={FullPic} alt='full' className='z-50'/>
    <div className='absolute right-3 md:right-10 border-[5px] md:border-[10px] -mt-5 md:-mt-10 rounded-full p-5 md:p-10 z-20'><p></p></div>
    </div>
   
   
    </div>
    
    
    </section>
    </section>



    <section className='px-3 sm:px-10 md:px-24 py-14 text-black'>

    <section className='flex flex-wrap md:flex-nowrap  gap-24'>
    <div className='py-10 md:w-[55%] '>
    <h1 className='uppercase font-sedan'>Our Music</h1>
    <div className='flex '>
    <p className='font-space font-bold py-5 text-2xl md:text-4xl'>Musical Innovation</p>
    <p className='w-[20%] md:w-full'><img src={VectorBlack} alt='loa' />    </p>
    </div>
    <p className='text-lg leading-10'>Our music is a fusion of various genres, blending rock, pop, and electronic elements to create a sound that is distinctly our own. Each member of Sonic Pulse brings their unique influences and talents to the table, resulting in a rich, layered musical experience. We’re always experimenting and evolving, pushing the boundaries of what’s possible in music. We are committed to pushing the boundaries of what’s possible in music. By blending genres such as rock, pop, and electronic, we create a sound that is distinctly our own. Our goal is to continually evolve, experimenting with new styles and techniques to keep our music fresh and exciting.</p>
    </div>


    <div className='w-full md:w-[38%] flex flex-col gap-5 mt-8 md:mt-16'>
    <img src={Teame} alt='top' className='object-contain transform -translate-x-2 md:-translate-x-10 w-[100%]' />
    <img src={Topp} alt='top' className='object-contain w-[100%]'/>
    </div>




    </section>




    </section>

    <Team />
    <Gallery />
    <Community />
    <Book />
    
    
    </div>
  )
}

export default About