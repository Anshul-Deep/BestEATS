import React, { useState } from 'react'
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className='max-w-full mx-auto flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-2'>
          <AiOutlineMenu className='h-8 w-8 text-white' />
        </div>
        <h1 className='text-white bg-black/80 px-2 text-2xl sm:text-3xl lg:text-4xl rounded'>
          Best
          <span className='text-green-500 font-bold'>EATS</span>
        </h1>
        <div
          className='hidden sm:flex items-center
         bg-gray-200  p-1 text-[14px] rounded-md'
        >
          <p className='bg-slate-800 text-gray-200 rounded-md p-1'>delivery </p>
          <p className='p-1'>pickup </p>
        </div>
      </div>
      <div
        className='bg-gray-200 rounded-md flex items-center px-2 
      w-[200px] sm:w-[300px] lg:w-[400px]'
      >
        <AiOutlineSearch size={24} />
        <input
          className='bg-transparent p-2 focus:outline-none w-full'
          type='text'
          placeholder='Search Foods'
        />
      </div>
      {/* cart */}
      <div>
        <button className='bg-black text-white hidden md:flex items-center py-2'>
          <BsFillCartFill size={20} className='mr-2' />
          cart
        </button>
      </div>
      {/* mobile menu */}
      {nav ? (
        <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'></div>
      ) : (
        ''
      )}

      {/*side drawerr */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-gray-200 z-10 duration-200'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200'
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className='absolute top-4 right-4 cursor-pointer'
        />
        <h2 className='text-purple-400 text-2xl p-4'>
          Best<span className='font-bold text-green-600'>EATS</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'>
              <TbTruckDelivery size={25} className='mr-4' />
              Orders
            </li>
            <li className='text-xl py-4 flex'>
              <MdFavorite size={25} className='mr-4' />
              Favourites
            </li>
            <li className='text-xl py-4 flex'>
              <FaWallet size={25} className='mr-4' />
              Wallet
            </li>
            <li className='text-xl py-4 flex'>
              <AiFillTag size={25} className='mr-4' />
              Vouchers
            </li>
            <li className='text-xl py-4 flex'>
              <MdHelp size={25} className='mr-4' />
              Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
