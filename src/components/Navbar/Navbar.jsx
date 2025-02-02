import React, { useState } from 'react'
import { NavbarMenu } from '../../mockData/Data'
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import { PiShoppingCartThin } from 'react-icons/pi';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {

  const[open, setOpen] = useState(false);

  return (
    <>
    <nav>
        <div className='container flex justify-between items-center py-8'>
            {/* logo section */}
            <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                <FaDumbbell />
                <p>Coders</p>
                <p className='text-secondary'>Gym</p>
            </div>
            {/* menu section */}
            <div className='hidden md:block'>
              <ul className='flex items-center gap-6 text-gray-600'>
                {
                  NavbarMenu.map(item=>{
                    return<li key={item.id}>
                      <a className='inline-block py-1 px-3 hover:text-primary font-semibold duration-200' href={item.link}>{item.title}</a>
                    </li>
                  })
                }
              </ul>
            </div>
            {/* icon section */}
            <div className='flex items-center gap-3'>
              <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                <CiSearch />
              </button>
              <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200'>
                <PiShoppingCartThin />
              </button>
              <button className='hover:bg-primary text-primary font-semibold hover:text-white rounded-md border border-primary px-5 py-1 duration-200 hidden md:block'>Login</button>
            </div>
            {/* mobile hamburg menu section */}
            <div className='md:hidden' onClick={()=>setOpen(!open)}>
              <MdMenu className='text-4xl' />
            </div>
        </div>
    </nav>
    {/* mobile menu section */}
    <ResponsiveMenu open={open} />
    </>
  )
}

export default Navbar