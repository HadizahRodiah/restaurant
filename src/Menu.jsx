import React from 'react'
import * as Icons from 'react-bootstrap-icons';
 

const Menu = () => {
  return (
    <div className='bg-gradient-to-r  from-green-300 to-slate-200 flex flex-col flex-wrap justify-between py-20 md:flex-row' id='menu'>
    <div className='w-100 py-10 text-center flex flex-col justify-between md:flex-col items-center md:space-x-12'>
   <Icons.BookHalf width={150} height={100} className='round rounded-full text-yellow-900 shadow-lg m-10'/>
 <span className=' font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-green-900'>Menu</span> <span className='text-3xl text-yellow-900'>let's Cook!</span></div>
    <div className='flex flex-col md:flex-row md:ml-20 justify-between flex-wrap'>
        <ul className='bg-green-400 w-60 m-20 md:p-5'>
            <h1 className='text-transparent  bg-clip-text bg-gradient-to-r from-green-900 to-yellow-500 font-bold text-3xl'>Main Course</h1>
            <li className='flex-row mb-2'><span className='text-black font-bold mr-5'>Cheese burger</span><span className='text-black'>$40.00</span></li>
            <li className='flex-row mb-2'><span className='text-black font-bold mr-5'>Cheese Sandwich</span><span className='text-black'>$10.00</span></li>
            <li className='flex-row mb-2'><span className='text-black font-bold mr-5'>Chicken burger</span><span className='text-black'>$20.00</span></li>
            <li className='flex-row mb-2'><span className='text-black font-bold mr-5'>Spicy chicken</span><span className='text-black'>$30.00</span></li>
            <li className='flex-row mb-2'><span className='text-black font-bold mr-5'>Hot dog</span><span className='text-black'>$40.00</span></li>
         </ul>
         <ul className='bg-green-400 w-60 m-10 md:p-5'>
            <h1 className='text-transparent  bg-clip-text bg-gradient-to-r from-green-900 to-yellow-500 font-bold text-3xl'>Appetizers</h1>
            <li className='flex-row mb-2'><span className='text-black font-bold mr-5'>Fruits Salad</span><span className='text-black'>$40.00</span></li>
            <li className='flex-row mb-2'><span className='text-black font-bold mr-5'>Cocktails</span><span className='text-black'>$10.00</span></li>
            <li className='flex-row mb-2'><span className='text-black font-bold mr-5'>Nuggets</span><span className='text-black'>$20.00</span></li>
            <li className='flex-row mb-2'><span className='text-black font-bold mr-5'>Sandwich</span><span className='text-black'>$30.00</span></li>
            <li className='flex-row mb-2'><span className='text-black font-bold mr-5'>French Fries</span><span className='text-black'>$40.00</span></li>
         </ul>
         <ul className='bg-green-400 w-60 m-20 p-5'>
            <h1 className='text-transparent  bg-clip-text bg-gradient-to-r from-green-900 to-yellow-500 font-bold text-3xl'>Beverages</h1>
            <li className='flex-row mb-2'><span className='text-black font-bold mr-5'>Milk Shake</span><span className='text-black'>$40.00</span></li>
            <li className='flex-row mb-2'><span className='text-black font-bold mr-5'>Iced tea</span><span className='text-black'>$10.00</span></li>
            <li className='flex-row mb-2'><span className='text-black font-bold mr-5'>Orange juice</span><span className='text-black'>$20.00</span></li>
            <li className='flex-row mb-2'><span className='text-black font-bold mr-5'>Lemon Tea</span><span className='text-black'>$30.00</span></li>
            <li className='flex-row mb-2'><span className='text-black font-bold mr-5'>Coffee</span><span className='text-black'>$40.00</span></li>
         </ul>    
  </div>
  </div>
   
  )
}

export default Menu