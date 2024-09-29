import React from 'react'
import Imb from './assets/Imb.jpg'
import Imk from './assets/Imk.jpg'
import Imj from './assets/Imj.jpg'
import Imm from './assets/Imm.jpg'
import Imn from './assets/Imn.jpg'
import Iml from './assets/Iml.jpg'
import Imo from './assets/Imo.jpg'

import * as Icons from 'react-bootstrap-icons';
const Good= () => {
  const order=[
    {
      id:1,
      image:Iml,
      name:"Greek Salad Recipe",
      price:"$50.00"
    },
    {
      id:2,
      image:Imj,
      name:"Garlic Herb roasted potatoes",
       price:"$30.00"
    },
    {
      id:3,
      image:Imk,
      name:"veggies and egg salad ",
       price:"$40.00"
    },
    {
      id:4,
      image:Imm,
      name:"Naso cheese bread",
      price:"$80.00"
    },
    {
      id:5,
      image:Imn,
      name:"Air Fried and Vegatables",
      price:"$30.00"
    },
    {
      id:6,
      image:Imo,
      name:"Gluten free Croque madame",
       price:"$70.00"
    }
  ]
    
  return (
    <div className=' p-10 bg-green-100 flex flex-col flex-wrap justify-between py-20 md:flex-row' id='order'>
    <div className='w-100 py-10 text-center flex flex-col justify-between md:flex-col items-center md:space-x-12'>
   <Icons.SearchHeartFill width={150} height={100} className='round rounded-full text-yellow-900 shadow-lg m-10'/>
 <span className=' font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-green-900'>Order</span> <span className='text-3xl text-yellow-900'>Now!</span>   </div>


  {order.map(order=>(
              <div className="card w-80 mb-10 shadow-lg shadow-lg" key={order.id}>
              <img src={order.image} className="card-img-top" alt/>
              <div className="card-body bg-green-500">
                <h5 className="card-title font-bold text-white "> Available Recipe</h5>
                <p className="card-text"><span className=' italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-yellow-900 text-2xl mr-2 font-bold'>{order.name}</span>:order will be delivered within 2 hours</p>
                <button type="button" className="btn mt-2 flex flex-row font-bold bg-yellow-300 hover:bg-white shadow-lg"  data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Thanks for patronizing delivery is on it way already">
              <Icons.Cart width={25} height={25} className='mr-1'/> <span className='mr-1 text-black'> Add to cart </span>
            <span className='text-black'>{order.price}</span></button>
              </div>
              </div>     
            ))}
</div>
  
    
  )
}

export default Good