import React, { useState } from 'react'
import  Logo  from '../utils/image/MobileLogo.png'
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Nav } from '../utils/Datas'


function MobileNav() {
  const [visible, setVisible] = useState(false)
 

  const toggleMenu = () => {
    setVisible(!visible)
  }

  return (
    <div className='px-5 py-5 sm:px-10 bg-black lg:hidden'>
  <div className='relative'>
    <section className='flex justify-between lg:hidden'>
     <Link to="/"><p className='w-[80%]'> <img src={Logo} alt='logo' /></p></Link> 
      <p  onClick={toggleMenu}> <FaBars className='text-2xl mt-5'/> </p>
    </section>  
  </div>

  <AnimatePresence>
  {visible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='fixed z-50 bg-black right-0 top-0 w-full lg:hidden'
    >
      <div className='px-10 bg-black w-full h-screen pt-10 lg:hidden'>
        <div className='flex justify-between'>
          <p onClick={toggleMenu} className='duration-100 mt-10'>
            <FaTimes className='text-3xl' />
          </p>
          <div>
            <Link to="/contact"><button onClick={toggleMenu} className='border py-4 px-5 font-readex'>Contact us</button></Link>
          </div>
        </div>
        <div className='flex justify-center text-center gap-5 flex-col mt-5'>
          {Nav.map((nav) => (
            <NavLink
              key={nav.id}
              to={nav.to}
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? 'text-yellow-500 text-xl' : 'text-white text-xl'
              }
            >
              <p>{nav.nav}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>


</div>
  )
}

export default MobileNav