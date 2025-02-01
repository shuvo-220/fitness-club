import React from 'react'
import { NavbarMenu } from '../../mockData/Data'
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';
import { PiShoppingCartThin } from 'react-icons/pi';

const Navbar = () => {
  return (
    <>
    <nav>
        <div className='container'>
            {/* logo section */}
            <div className='text-2xl flex'>
                <FaDumbbell />
                <p>Coders</p>
                <p>Gym</p>
            </div>
            {/* menu section */}
            {/* icon section */}
            {/* mobile hamburg menu section */}
        </div>
    </nav>
    {/* mobile menu section */}
    </>
  )
}

export default Navbar