import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-100'>
      <div className='max-w-[1240p] mx-auto py-16 px-4 flex flex-col '>
        <div className=' text-center justify-between items-center'>
            <h1>BEACHES.</h1>
            <div className='flex justify-center w-full '>
                <FaFacebook className='icon m-4'/>
                <FaInstagram className='icon m-4'/>
                <FaLinkedin className='icon m-4' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
