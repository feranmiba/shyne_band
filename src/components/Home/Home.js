import React, { useState, useEffect } from 'react'
import HomePic from '../utils/image/Home.png'
import { BsCaretRight } from "react-icons/bs";
import Team from '../reuseable/Team';
import Gallery from '../reuseable/Gallery';
import { Link } from 'react-router-dom';
import { Video01, Video02, Video03, Dots, Top1, Bottom1, Dot, imageWithHover, VectorBlack, Last } from '../utils/Datas';
import { BsArrowRightShort } from "react-icons/bs";
import { motion } from 'framer-motion';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import MobileTeam from '../reuseable/MobileTeam';
import Book from '../reuseable/Book';

function Home() {
  const [isExpanded, setIsExpanded ] = useState(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const getWidth = (id) => {
    if (windowWidth < 640) { 
      return isExpanded === id ? '100%' : '30%';
    } else if (windowWidth < 1024) { 
      return isExpanded === id ? '50%' : '25%';
    } else { 
      return isExpanded === id ? '30%' : '12%';
    }
  };



  const expand = (id) => {
    setIsExpanded(isExpanded === id ? null : id)
  }

  return (
    <div>
    <section className="relative w-full h-screen">

    <div className='absolute inset-0'>
    <div className='absolute inset-0 bg-[#1E1E1E] z-20 opacity-50'></div>
    <img src={HomePic} alt='home' className='w-full h-full object-cover ' />
    </div>

    <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center text-[#FFFFFF] font-space">
    <p className='text-3xl w-[300px] font-sedan font-light mb-5  sm:text-2xl md:text-3xl lg:text-6xl md:w-[850px] px-4 lg:px-0'>
    Experience the Sound of Shyne
    </p>
    <p className='mt-2 mb-10'>Blending genres and breaking boundaries with every note.</p>
    <a href='https://www.youtube.com/@ShyneBand'>
    <div className='border-2 rounded-lg px-5 py-3 flex justify-between w-[200px]'>
    <button>Listen Now</button>
    <p className='border-4 p-2 rounded-full'> <BsCaretRight /> </p>
    </div>
    </a>
    

    </div>
    
    
    </section> 



    <section className='px-3 sm:px-10 lg:px-24 text-black'>

    <section className='flex flex-wrap justify-center lg:justify-between lg:flex-nowrap'>
    <div className='py-10 text-center md:text-left w-full lg:w-[60%] '>
    <p className='font-sedan py-5'>ABOUT SHYNE BAND</p>
    <h1 className='text-3xl md:text-5xl font-bold font-space pb-3'>Unleashing the Sound of SHYNE BAND</h1>
    <p className='text-base md:text-lg leading-8 md:leading-10'>shyne Band is more than just a band; it’s an experience. Formed in the heart of the underground music scene in 2015, Sonic Pulse blends the raw energy of rock with the experimental flair of electronic music and the soulful touch of indie. Known for their electrifying live performances and innovative sound, the band has carved out a niche that defies conventional genres. Their music is a journey through soundscapes, creating an immersive experience that resonates with a diverse audience. With a passion for pushing boundaries and connecting with fans, Sonic Pulse continues to rise as a formidable force in the music world.</p>
    <div className=' mt-10 text-white'>
    <Link to="/about"><button className='border px-4 py-3 bg-[#000000] rounded-lg flex justify-between gap-1 font-sedan uppercase'>Read More <BsArrowRightShort  className='text-2xl'/> </button> </Link>
    </div>
    </div>
    <div className='mt-32 md:-ml-10'>
    <div className='flex md:justify-between'>
    <img src={Top1} alt='top' className='w-[80%] sm:w-[100%] lg:max-w-[400px] z-40 object-contain' />
    <img src={Dot} alt='dot' className='max-w-[100px] sm:max-w-[150px] right-5 sm:right-24 z-10 md:right-12 absolute -translate-y-1/3   object-contain'/>
    </div>

    <div className='flex justify-between'>
    <img src={Bottom1} alt='bottom' className='-translate-y-10 translate-x-2 md:translate-x-10 z-50 rounded-xl w-[80%] sm:w-[100%] lg:max-w-[400px] object-contain' />
    <img src={Dot} alt='dot' className='max-w-[100px] md:max-w-[150px] right-[60%] md:right-[30%] absolute md:translate-y-full'/>
    </div>
    </div>
    </section>



    <section className=' mt-10 text-center'>
    <div className='py-10'>
    <p className='font-sedan py-5'>What we can offer</p>
    <h1 className='text-3xl md:text-5xl font-bold font-space pb-3 '>Elevate Your Event with Our Unique Musical Experiences</h1>
    <p className='text-lg leading-10 text-left md:text-center'>Transform your event with Shyne Band dynamic live performances, professional music production, and innovative collaborations. Whether it’s a festival, corporate gathering, or private party, our unique musical experiences will captivate and entertain your guests. Let us help you create unforgettable memories with the magic of music.</p>
    </div>




    <section className='flex flex-wrap justify-center gap-4'>

  {imageWithHover.map((data) => (<div className="relative w-full md:w-[47%] lg:w-[32%] text-center mt-5">
    <img src={data.imgSrc} className="w-full h-auto object-cover" alt="Live Performance" />
    <p className="absolute bottom-32 md:bottom-28 sm:bottom-56 font-space text-center sm:w-[400px] md:w-[200px] left-24 transform sm:left-32 md:left-20 font-bold text-white text-lg sm:text-2xl md:text-2xl lg:text-3xl">
    {data.title}
    </p>

    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="absolute top-0 left-0 w-full h-full bg-[#D3D3D3] text-left px-5 py-4 font-space text-black text-lg sm:text-xl md:text-2xl lg:text-sm"
    >
      <p className='font-bold'>{data.title}</p>
      <p className='text-sm leading-6 sm:leading-10 sm:text-lg md:leading-8'>
      {data.description}
      </p>
    </motion.div>
  </div>))  }


     

    </section>


    </section>



    </section>




    <Team />
    <MobileTeam />


    <section className='px-3 sm:px-10 md:px-24 my-10 text-black'>
    <section>


    <section className='flex justify-between flex-wrap md:flex-nowrap'>
    <div className='py-10'>
    <p className='font-sedan py-5'>What we can offer</p>
    <div className='flex gap-5'>
    <h1 className='text-3xl md:text-4xl  lg:text-5xl  font-bold font-space pb-3'>Catch Us Live</h1>
    <p><img src={VectorBlack} alt='star' /></p>
    </div>
    <p className='text-xl leading-10'>Experience the Magic of Shyne band on Stage</p>
    </div>

    <div className='py-3 md:py-10'>
    <Link to="/event"><button className='border-2 border-black px-10  md:px-5 lg:px-10 rounded-lg  py-3 flex justify-between gap-1 font-sedan uppercase'>Buy Tickets<BsArrowRightShort  className='text-2xl'/> </button> </Link>

    </div>
    
    
    </section>

   


    <section className='w-[100%] whitespace-nowrap  overflow-x-auto scrollbar-hide'>

    <section className='flex justify-between gap-10 mb-28 mt-10 '>
   {Last.map((det) => ( <motion.div
    onClick={() => expand(det.no)}
    initial={{ width: '12%' }}
    animate={{ width: getWidth(det.no) }}
    transition={{ duration: 0.5 }}
    className={`bg-black text-white pt-5 pb-10 h-[80vh] md:h-[60vh] rounded-lg md:w-[30%] md:${det.no % 2 === 0 ? 'mt-20' : 'mt-0'} `}
    >


    <section className=' whitespace-break-spaces'>
    {isExpanded === det.no && ( <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
      className='text-white px-5 py-1 w-[100%]'>
      <h1 className="font-bold font-space text-base md:text-2xl">{det.title}</h1>
      <p className="text-[#65676C] my-5">August 5th 2024</p>
      <p className="font-inter text-xs   md:leading-7">
      {det.description}
      </p>
      <button className="hover:border-[1px] py-2 px-3 mt-4  rounded-md transition-all duration-300 ease-in-out">
      Get Tickets
    </button>
    </motion.div>)}
    <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: isExpanded === det.no ? 0 : 1 }}
    transition={{ duration: 1 }}
    className='flex justify-center flex-col items-center mt-0'>
    <h1 className='text-xl bold font-inter italic'>{det.no}</h1> 
    <p className="transform text-sm rotate-90 mt-20 font-space">{det.show}</p>
    </motion.div>
    
  
    </section>
    
    
    
    </motion.div> ))}
    </section>
  </section>
    </section>
    </section>




    <section className='px-3 sm:px-10 md:px-24 my-5 py-5 text-white bg-black'>
    <div className='py-10 text-center'>
    <p className='font-sedan py-5'>A curated playlist</p>
    <h1 className='text-3xl md:text-5xl font-bold font-space pb-3'>Check out latest Videos</h1>
    <p className='text-lg leading-10'>Watch Our Most Recent Music Videos, Behind-the-Scenes, and More</p>
    </div> 

    <div className='flex flex-wrap justify-center lg:flex-nowrap gap-10 md:gap-0 md:justify-between my-5'>
    <img src={Dots} alt='/' className='max-w-[100px] absolute -translate-y-10 translate-x-8 md:-translate-x-5 z-20 object-contain'/>
    <img src={Video01} alt='/' className='sm:w-[45%] lg:max-w-[300px] object-contain z-50'/>
    <img src={Video02} alt='vid2' className='sm:w-[45%] lg:max-w-[300px] object-contain' />
    <img src={Video03} alt='vid3' className='sm:w-[45%] lg:max-w-[300px] object-contain' />
    
    </div>

    <div className='flex justify-center gap-10 py-10'>
  <p className='border p-3 rounded-full'> <FaAngleLeft  className='text-2xl' /></p> 
  <p className='border p-3 rounded-full'> <FaAngleRight  className='text-2xl' /></p>  

    </div>
    </section>


    <section>
    <Gallery />
    </section>

    <Book />
    </div>
  )
}

export default Home