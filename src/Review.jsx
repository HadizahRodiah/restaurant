import React from 'react'
import Imp from './assets/Imp.jpg'
import Imq from './assets/Imq.jpg'
import Imt from './assets/Imt.jpg'
import Ims from './assets/Ims.jpg'

import * as Icons from 'react-bootstrap-icons';


const Review = () => {
  return (
    <div>
<div className='p-10 bg-green-100 flex flex-col flex-wrap justify-between py-12 md:flex-row' id='review'>
    <div className='w-100 py-10 text-center flex flex-col justify-between md:flex-col items-center md:space-x-12'>
   <Icons.PencilSquare width={150} height={100} className='round rounded-full text-yellow-900 shadow-lg m-10'/>
 <span className=' font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-green-900'>Customers</span> <span className='text-3xl text-yellow-900'>Reviews</span>   </div>
   <div className='w-100 py-10 text-center flex flex-col justify-between md:flex-row flex-wrap items-center md:space-x-12'>
 <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-row'>
         <Icons.Person  width={40} height={40} /><p>Yusuf Hadizzay</p>
    </div>
    <cite>hadizzy@gmail.com</cite>
    <p className='text-black font-bold'>The recipe taste more better they look...</p>
    <h5 className='italic font-100'>more</h5>
    </div>
    <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-row'>
         <img src={Imq}  width={40} height={35} className='round rounded-full shadow-lg'/> <h1 className='m-3 text-black font-bold'>Yusuf Hadizzay</h1>
    </div>
    <cite>LATIIizzy@gmail.com</cite>
    <p className='text-black font-bold'>The recipe taste more better they look...</p>
    <h5 className='italic font-100'>more</h5>
    </div>
    <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-row'>
         <Icons.Person  width={50} height={50} /> <h1 className='m-3 text-black font-bold'>Mr Dorcas Bull</h1>
    </div>
    <cite>dorcasbull@gmail.com</cite>
    <p className='text-black font-bold'>The recipe taste more better they look...</p>
    <h5 className='italic font-100'>more</h5>
    </div>
    <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-row'>
         <img src={Imp}  width={40} height={35} className='round rounded-full shadow-lg'/> <h1 className='m-3 text-black font-bold'>Mr John Week</h1>
    </div>
    <cite>johnweek@gmail.com</cite>
    <p className='text-black font-bold'>Food are always delivered hot...</p>
    <h5 className='italic font-100'>more</h5>
    </div>
    <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-row'>
         <img src={Imt}  width={40} height={35} className='round rounded-full shadow-lg'/> <h1 className='m-3 text-black font-bold'>Mr Cat Fish</h1>
    </div>
    <cite>catfish@gmail.com</cite>
    <p className='text-black font-bold'>very affordable and original...</p>
    <h5 className='italic font-100'>more</h5>
    </div>
    <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-row'>
         <Icons.Person  width={40} height={40} /><p>Mr Ahmad gidado</p>
    </div>
    <cite>Ahmadgiddy@gmail.com</cite>
    <p className='text-black font-bold'>The recipe taste more better they look...</p>
    <h5 className='italic font-100'>more</h5>
    </div>
 
    <div className='flex flex-col shadow-lg bg-green-100 p-5 w-96 m-2 hover:bg-white'>
    <div className='flex flex-row'>
         <img src={Ims}  width={40} height={35} className='round rounded-full shadow-lg'/> <h1 className='m-3 text-black font-bold'>Miss Anderson Tessi</h1>
    </div>
    <cite>tessyizzy@gmail.com</cite>
    <p className='text-black font-bold'>Simple and classic packaging...</p>
    <h5 className='italic font-100'>more</h5>
    </div>
 

 </div>


 </div>
  

    </div>
  )
}

export default Review