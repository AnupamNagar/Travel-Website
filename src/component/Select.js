import React from 'react'
import Baga from '../assets/Baga.jpg'
import Havelock from '../assets/Havelock.jpg'
import Palolem from '../assets/Palolem.jpg'
import Paradise from '../assets/Paradise.jpg'
import Varkala from '../assets/Varkala.jpg';
import Bali from '../assets/Bali.jpg'

const Select = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      <div className='relative'>
        <img className='w-full h-full object-cover' src={Baga} alt='/'></img>
        <div className='w-full h-full absolute left-0 top-0  bg-gray-900/10'>
            <p className='left-4 bottom-4 text-2xl absolute text-white font-bold'>Baga Beach</p>
        </div>
      </div>
      <div className='relative'>
        <img className='w-full h-full object-cover' src={Havelock} alt='/'></img>
        <div className='w-full h-full absolute left-0 top-0  bg-gray-900/10'>
            <p className='left-4 bottom-4 text-2xl absolute text-white font-bold'>Havelock</p>
        </div>
      </div>
      <div className='relative'>
        <img className='w-full h-full object-cover' src={Palolem} alt='/'></img>
        <div className='w-full h-full absolute left-0 top-0  bg-gray-900/10'>
            <p className='left-4 bottom-4 text-2xl absolute text-white font-bold'>Palolem</p>
        </div>
      </div>
      <div className='relative'>
        <img className='w-full h-full object-cover' src={Paradise} alt='/'></img>
        <div className='w-full h-full absolute left-0 top-0  bg-gray-900/10'>
            <p className='left-4 bottom-4 text-2xl absolute text-white font-bold'>Paradise</p>
        </div>
      </div>
      <div className='relative'>
        <img className='w-full h-full object-cover'  src={Varkala} alt='/'></img>
        <div className='w-full h-full absolute left-0 top-0  bg-gray-900/10'>
            <p className='left-4 bottom-4 text-2xl absolute text-white font-bold'>Varkala</p>
        </div>
      </div>
      <div className='relative'>
        <img className='w-full h-full object-cover' src={Bali} alt='/'></img>
        <div className='w-full h-full absolute left-0 top-0  bg-gray-900/10'>
            <p className='left-4 bottom-4 text-2xl absolute text-white font-bold'>Bali</p>
        </div>
      </div>
    </div>
  )
}

export default Select
