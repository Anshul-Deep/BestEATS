import React from 'react'

const HeadCards = () => {
  return (
    <div className='max-w-full mx-auto p-4 py-12 grid sm:grid-cols-3 gap-6'>
      {/*cards */}
      <div className='rounded-xl relative '>
        {/*overlay*/}
        <div className='rounded-xl absolute w-full h-full bg-black/30  text-white'>
          <p className='font-bold text-xl px-2 pt-4'>Sun's out</p>
          <p className='px-2'>through the Clouds</p>
          <button className='bg-white border-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='rounded-xl max-h-[150px] w-full object-cover'
          src='https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
          alt='/'
        />
      </div>
      {/*cards */}
      <div className='rounded-xl relative '>
        {/*overlay*/}
        <div className='rounded-xl absolute w-full h-full bg-black/30  text-white'>
          <p className='font-bold text-xl px-2 pt-4'>New Restaurants </p>
          <p className='px-2'>Added Daily</p>
          <button className='bg-white border-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='rounded-xl max-h-[150px] w-full object-cover'
          src='https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
          alt='/'
        />
      </div>
      {/*cards */}
      <div className='rounded-xl relative '>
        {/*overlay*/}
        <div className='rounded-xl absolute w-full h-full bg-black/30  text-white'>
          <p className='font-bold text-xl px-2 pt-4'>Indian Sweets</p>
          <p className='px-2'>Tasty Treats</p>
          <button className='bg-white border-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='rounded-xl max-h-[150px] w-full object-cover '
          src='https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
          alt='/'
        />
      </div>
    </div>
  )
}

export default HeadCards
