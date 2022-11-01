import React from 'react'
import Baga from '../assets/Baga.jpg'
import Havelock from '../assets/Havelock.jpg'
import Palolem from '../assets/Palolem.jpg'
import Paradise from '../assets/Paradise.jpg'
import Varkala from '../assets/Varkala.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
      <h1>All Inclusove Resorts</h1>
      <p className='py-4'>On The India's Best Beaches</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Baga} alt='/'></img>
        <img className='w-full h-full object-cover' src={Havelock} alt='/'></img>
        <img className='w-full h-full object-cover' src={Palolem} alt='/'></img>
        <img className='w-full h-full object-cover' src={Paradise} alt='/'></img>
        <img className='w-full h-full object-cover' src={Varkala} alt='/'></img>
      </div>
    </div>
  )
}

export default Destinations
