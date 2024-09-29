import React from 'react'
import * as Icons from 'react-bootstrap-icons';
import Imf from './assets/Imf.jpg'
 

const Reserve = () => {
  return (
    
<div className='py-20 bg-gradient-to-r from-green-300 to-slate-200 flex flex-col flex-wrap md:flex-row' id='reserve'>
    <div className='w-100 py-10 text-center flex flex-col justify-between md:flex-col items-center md:space-x-12'>
   <Icons.Table width={150} height={100} className='round rounded-full text-yellow-900 shadow-lg m-10'/>
 <span className=' font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-green-900'>Make a Reservation</span> <span className='text-3xl text-yellow-900'>Book a table</span></div>
    <div className=' grid grid-rows-2 md:grid-cols-2 p-10 h-100'>
<div className='bg-green-300 p-10 shadow-lg'>
    <h1 className='md:hidden font-bold text-justify'>Change your browser settlings to make a reservation (desktop-site)</h1>
<form action="" className='hidden md:inline '>
    <h1 className='text-yellow-800 text-3xl font-bold text-justify'>Fill the form to reserve a table</h1>
<form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="Name" className="form-label">Name</label>
    <input type="text" className="form-control bg-yellow-700" id="Name"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control bg-yellow-700" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-md-6">
    <label for="Time" className="form-label">Time</label>
    <input type="time" className="form-control bg-yellow-700" id="Time"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">Category</label>
    <select id="inputState" className="form-select">
      <option selected>Vip</option>
      <option>regular</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control bg-yellow-700" id="inputZip"/>
  </div>
  <div className="col">
    <button type="submit" className="btn bg-yellow-800">Reserve</button>
  </div>
</form>
</form>
</div>
<div classNameName='bg-green-200'>
    <img src={Imf}/>
</div>
    </div>
    </div>
  )
}

export default Reserve