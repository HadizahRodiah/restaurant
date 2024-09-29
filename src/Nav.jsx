import React from 'react'
import * as Icons from 'react-bootstrap-icons';

const Nav = () => {
  return (
    <nav className='bg-green-100 text-black border border-black px-8 md:px-16 lg:px-24 w-full z-4'>
    <div className='container mt-2 py-2 flex justify-center md:justify-between item-center'>
        <div className='text-2xl font-bolder flex flex-row hidden md:inline md:flex-row'>
        <Icons.Star width={40} height={40} className='text-yellow-700'/>
        </div>
        <div className='space-x-6 font-bold'>
        <a href="#home" className='hover:text-yellow-700'>Home</a>
        <a href="#service" className='hover:text-yellow-700'>Service</a>
        <a href="#menu" className='hover:text-yellow-700'>Menu</a>
        <a href="#order" className='hover:text-yellow-700'>Order</a>
        <a href="#review" className='hover:text-yellow-700'>Review</a>
        <a href="#footer" className='hover:text-yellow-700'>Contact</a>
        </div>
        <a href='#reserve'className='font-bold bg-gradient-to-r from-green-500 to-yellow-50 text-black hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Reservation</a>
    </div>
</nav>

)
}

export default Nav