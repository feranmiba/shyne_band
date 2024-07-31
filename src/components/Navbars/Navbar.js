import React from 'react'
import  Logo  from '../utils/image/Logo.png'
import { NavLink, Link } from 'react-router-dom'
import { Nav } from '../utils/Datas'
import { BsArrowRightShort } from "react-icons/bs";

function Navbar() {

  

  return (
    <div>
      <nav className='bg-black px-10 py-5 justify-between font-sedan hidden lg:flex '>
      <div>
   <p className='w-full'><img src={Logo} alt='logo' className='w-[50px]'/> </p> 
      </div>


      <div className='flex justify-center text-center xl:gap-10 lg:gap-5 pt-5 text-xl'>
      {Nav.map((nav) => (
        <NavLink key={nav.id} to={nav.to} className={({ isActive }) =>
          isActive ? 'border-b-2' : 'text-white'
        }>
        <p>{nav.nav}</p>
    </NavLink>  
      ))}
      </div>
      <div>
     <Link to="/contact"><button className='border py-3 px-7 font-readex text-white flex justify-between text-xl gap-1'>Contact us <BsArrowRightShort className='text-3xl'/></button></Link> 
      </div>
      </nav>
    </div>
  )
}

export default Navbar