import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import beachvid from '../assets/beachVid.mp4'
function Video() {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover' src={beachvid} autoPlay loop muted/>
      <div className='absolute w-full h-full left-0 top-0 bg-gray-900/30'>
        <div className='absolute w-full h-full top-0 flex flex-col justify-center text-center text-white'>
            <h1>First Class Travel</h1>
            <h3 className='py-4'>Top 1% Locations World-wide</h3>
            <form className='flex justify-between items-center max-w-[700px] w-full border mx-auto p-1 rounded-md bg-gray-100/90 text-black'>
                <div>
                    <input type='text' placeholder='Search Destinations' className='bg-transparent w-[300px] sm:w-[400px] focus:outline-none' />
                </div>
                <div>
                    <button><AiOutlineSearch size={20} className='icon' style={{color:'white'}}/></button>
                </div>

            </form>
            
        </div>
      </div>
    </div>
    
  )
}

export default Video
