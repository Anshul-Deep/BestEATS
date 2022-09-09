import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-full mx-auto p-4'>
      <div className='max-h-[350px] relative '>
        {/*overlay*/}
        <div
          className='absolute w-full h-full text-gray-200 max-h-[350px] bg-black/30
        flex flex-col justify-center'
        >
          <h1 className='px-4 text-3xl sm:text-4xl md:text-5xl  font-bold'>
            The <span className='text-green-500'>Best</span>
          </h1>
          <h1 className='px-4 text-3xl sm:text-4xl md:text-5xl  font-bold'>
            <span className='text-green-500'>Foods </span>Delivered
          </h1>
        </div>
        <img
          className='w-full max-h-[350px] object-cover'
          src='https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&q=60'
          alt='/'
        />
      </div>
    </div>
  )
}

export default Hero
