import React from 'react'
import * as Icons from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className='py-20'>
    <div className='py-20 bg-green-900 hover:slate-300 text-black px-8 md:px-18 lg:px-24 ' id='footer'>
        <div className="card bg-green-900 flex flex-col py-14 justify-between md:flex-col items-center md:space-x-12" >
  <div className="card-header bg-white text-3xl font-bold">
    FOOTER
  </div>
  <div className="card-body">
    <div className='flex flex-row justify-between md:flex-row'>
    <div className='flex flex-col md:flex-col justify-between font-bold text-white'>
   <li className='flex flex-row'><Icons.House width={20} height={20} className='text-black mr-2'/> <a className='hover:text-underline ' href='#home'>Home</a></li>
   <li className='flex flex-row'><Icons.Table width={20} height={20} className='text-black mr-2' /><a className='hover:text-underline ' href='#reserve'>Reservation</a></li>
   <li className='flex flex-row'><Icons.CupHot width={20} height={20} className='text-black mr-2'/><a className='hover:text-underline ' href='#order'>Order</a></li>
   <li className='flex flex-row'><Icons.Bookmark width={20} height={20} className='text-black mr-2'/><a className='hover:text-underline ' href='#review'>Review</a></li>
    </div>
      <div className='flex-2 flex-col justify-between text-white font-bold '>
        <h2>Contact</h2>
   <li className='flex flex-row'> <Icons.Envelope width={20} height={20} className='text-black   mr-2 '/> <a className='hover:text-underline ' href='#home'>Email</a></li> 
   <li className='flex flex-row'> <Icons.Whatsapp width={20} height={20} className='text-black   mr-2 '/> <a className='hover:text-underline ' href='#home'>Whatsapp</a></li> 
   <li className='flex flex-row'> <Icons.Linkedin width={20} height={20} className='text-black  mr-2 '/> <a className='hover:text-underline ' href='#home'>Linkedin</a></li> 
   <li className='flex flex-row'> <Icons.Phone width={20} height={20} className='text-black  mr-2'/> <a className='hover:text-underline ' href='#home'>Phone</a></li> 
    
      </div>
    </div>
    <div className="blockquote mb-0 font-white">
      <p className='text-black'>A well-known quote, contained in a blockquote element.</p>
      <div className="text-white ml-5">your satisfaction is our priority <cite className='text-white font-bold text-2xl mt-3 mb-2'>Our Priority</cite></div>
    </div>
  </div>
</div>

</div>
    </div>
  )
}

export default Footer