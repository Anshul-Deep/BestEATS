import React, { useState } from 'react'
import { data } from '../data/data.js'

const Food = () => {
  // console.log(data)

  const [foods, setFoods] = useState(data)

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category
      })
    )
  }

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price
      })
    )
  }

  return (
    <div className='max-w-full m-auto px-4 py-10'>
      <h1 className='text-green-500 font-bold text-3xl text-center '>
        Top Rated Menu Items
      </h1>
      {/*filter row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/**filter type */}
        <div>
          <p className='font-bold text-white'>filter by type</p>
          <div className='flex flex-wrap '>
            <button
              onClick={() => filterType('burger')}
              className='m-1 text-white border-green-500 border-[1px] hover:bg-green-600 hover:text-white hover:text-bold hover:border-green-600'
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='m-1 text-white border-green-500 border-[1px] hover:bg-green-600 hover:text-white hover:text-bold hover:border-green-600'
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='m-1 text-white border-green-500 border-[1px] hover:bg-green-600 hover:text-white hover:text-bold hover:border-green-600'
            >
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='m-1 text-white border-green-500 border-[1px] hover:bg-green-600 hover:text-white hover:text-bold hover:border-green-600'
            >
              Chickens
            </button>
            <button
              onClick={() => setFoods(data)}
              className='m-1 text-white border-green-500 border-[1px] hover:bg-green-600 hover:text-white hover:text-bold hover:border-green-600'
            >
              All
            </button>
          </div>
        </div>

        {/**filter price */}
        <div>
          <p className='font-bold text-white'>filter by price</p>
          <div className='flex flex-wrap'>
            <button
              onClick={() => filterPrice('$')}
              className='m-1 text-white border-green-500 border-[1px] hover:bg-green-600 hover:text-white hover:text-bold hover:border-green-600'
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='m-1 text-white border-green-500 border-[1px] hover:bg-green-600 hover:text-white hover:text-bold hover:border-green-600'
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='m-1 text-white border-green-500 border-[1px] hover:bg-green-600 hover:text-white hover:text-bold hover:border-green-600'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='m-1 text-white border-green-500 border-[1px] hover:bg-green-600 hover:text-white hover:text-bold hover:border-green-600'
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/**display food images */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className=' border-green-500 border-[1px] shadow-lg rounded-lg hover:scale-105 hover:rotate-2 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[180px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold text-green-300'>{item.name}</p>
              <p>
                <span className='bg-green-600 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Food
