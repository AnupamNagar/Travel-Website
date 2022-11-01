import React, { useState } from 'react'
import {BsPerson, BsSearch} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Navbar() {
  const [nav , setnav] = useState(false);
  const [logo , setlogo]  = useState(false);

  const handlenav = () =>{
    setnav(!nav);
    setlogo(!logo);
  }
  
  return (
    <div className='w-full flex justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div className='cursor-pointer'>
           <h1 onClick={handlenav} className={logo ? 'hidden' : 'block'}>BEACHES</h1>
        </div>
        {/*  mideum se bada hote hi display : flex ho jayegi else none rahegi  */}
        <ul  className=' hidden md:flex cursor-pointer'> 
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>View</li>
          <li>Book</li>
        </ul>
        <div className=' hidden md:flex cursor-pointer'>
          <BsSearch className='mr-3 ' size={20} />
          <BsPerson  size={20}/>
        </div>
        <div onClick={handlenav} className='md:hidden z-10 cursor-pointer'>
          {
            nav ? <AiOutlineClose className='text-black' size={20} /> :
            <HiOutlineMenuAlt4 size={20} />
          }
          {/* <HiOutlineMenuAlt4 />
          <AiOutlineClose /> */}
        </div>

        {/* Mobile menu  */}
        <div onClick={handlenav} className={nav ? 'absolute  text-black left-0 top-0 w-full bg-gray-100/90 flex flex-col px-4 py-7 ' : 'absolute left-[-100%]' }>
          <ul className='cursor-pointer'>
            <h1 className='cursor-pointer'>BEACHES.</h1>
            <li className='border-b'>Home</li>
            <li className='border-b'>Destinations</li>
            <li className='border-b'>Travel</li>
            <li className='border-b'>View</li>
            <li className='border-b'>Book</li>
            <div className='flex flex-col '>
              <button className='my-6'>Search</button>
              <button>Account</button>
            </div>
            <div className='flex justify-center mt-6' >
              <FaLinkedin className='icon m-4' />
              <FaFacebook className='icon m-4' />
              <FaInstagram className='icon m-4' />

            </div>
          </ul>
        </div>
      
    </div>
  )
}

export default Navbar
