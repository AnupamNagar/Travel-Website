import React from 'react'

const Search = () => {
  return (
    
    <div className='max-w-[420px] py-16 px-4 mx-auto'>
        <div>
            <div className='border text-center'>
                <p className='py-2'>Get An Additional 10% Off</p>
                <p className='py-4'>12 Hours left</p>
                <p className='py-2 bg-gray-800 text-gray-200 cursor-pointer'>Book Now And Save</p>
            </div>
        </div>
        <form className='w-full'>
            <div className='flex flex-col my-2'>
                <label className='p-2'>Destinations</label>
                <select className='border cursor-pointer rounded-md p-2'>
                    <option>Baga Beacch</option>
                    <option>Havelock</option>
                    <option>Palolem</option>
                    <option>Paradise</option>
                    <option>Varkala</option>
                </select>
            </div>
            <div className='flex flex-col my-4 '>
                <label className='p-2'>Check In</label>
                <input type='date' className='border cursor-pointer rounded-md p-2'></input>
            </div>
            <div className='flex flex-col my-2'>
                <label className='p-2'>Check Out</label>
                <input type='date' className='border cursor-pointer rounded-md p-2' ></input>
            </div>
            <div >
                <button className='w-full my-4'>Rates & Availability</button>
            </div>
        </form>
      
    </div>
  )
}

export default Search
