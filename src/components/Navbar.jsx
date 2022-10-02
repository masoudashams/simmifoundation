
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';


import {motion} from "framer-motion"

function Navbar({ }) {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);


  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  }


  return (
    <div className='bg-black text-white  flex justify-between items-center h-16 mx-w-[1240px] px-4 border-b-2'>
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ rotate: 1, scale: 1 }}
        transition={{
          type: "",
          stiffness: 260,
          damping: 20
        }}>
        <div className={clsx(logo ? 'hidden' : 'block', ' p-5', 'w-20','float-left')}>
          <Link to={'/'}>
            <img src={require('../assets/logo.png')} alt="LOGO" />
          </Link>
        </div>
        <div className={clsx(logo ? 'hidden' :  ' py-7','text-center','float-right')}>
          <Link to={'/'}>
         <span > SIMMI FOUNDATION </span>
    
          </Link>
        
        </div>
      
      </motion.div>

      <ul className='hidden  md:flex'>
        <NavLink title={('home')} path="/" />
        <NavLink title={("about")} path="/about" />
        <NavLink title={("Donate")} path="/Donate" />
        <NavLink title={("Blog")} path="/Blog" />
        <NavLink title={("Gallery")} path="/Gallery" />
        <NavLink title={("Volunteer")} path="/Volunteer" />
        <NavLink title={("Events")} path="/events" />
        <NavLink title={("Careers")} path="/careers" />
        <NavLink title={("contact")} path="/contact" />
      </ul>

      

      {/* menu icon */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={40} /> : <HiOutlineMenuAlt4 size={40} />}
      </div>

      {/* phone menu*/}
      <div onClick={handleNav} className={clsx(
        nav ? 'left-0 top-0  w-full bg-gray-100/90 px-4 py-7 flex flex-col' : ' left-[-920px]',
        "md:hidden absolute flex flex-col"
      )}>


        <ul className='flex flex-col'>
          <img src={require('../assets/logo.png')} className="w-40" alt="LOGO" />
          <NavLink title="home" path="/" />
          <NavLink title="about" path="/about" />
          <NavLink title="Donate" path="/Donate" />
          <NavLink title="Blog" path="/Blog" />
          <NavLink title="Gallery" path="/Gallery" />
          <NavLink title="Volunteer" path="/Volunteer" />
          <NavLink title="Events" path="/events" />
          <NavLink title="Careers" path="/careers" />
          <NavLink title="contact" path="/contact" />
        </ul>
      </div>
    </div>
  )
}

export default Navbar

function NavLink({ title, path, }) {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (path == location.pathname)
      setActive(true);
    else
      setActive(false);

  }, [location])

  return <Link to={path}>
    <button>
      <li className={clsx('cursor-pointer uppercase font-semibold hover:underline hover:text-orange-400 hover:scale-75 ', active && 'underline')}>{title}</li>
    </button>
  </Link>
}