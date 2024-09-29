import React from 'react'
import Ima from './assets/Ima.jpg'
import Imb from './assets/Imb.jpg'
import Imc from './assets/Imc.jpg'
import * as Icons from 'react-bootstrap-icons';
 

const Home = () => {

  return (
           <div className='bg-gradient-to-r from-green-300 to-slate-200 text-black py-20 px-8 md:px-18 lg:px-24 ' id='home'>
             <div className='flex flex-col py-14 justify-between md:flex-col items-center md:space-x-12'>
                <h1 className='justify-center font-bold text-4xl text-yellow-900'>Almas royy <span className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-800'>Food</span> Estate</h1>
           <p className='text-justify p-10'>Welcome to ALMAS food estate and Restaurant, nothing serious about this application just for learning purpose
            all images were downloaded from pinterest, no original delicacy just for display purpose.
            </p>       
            <Icons.Star width={80} height={80} className='text-yellow-700'/>
              <div className='bg-green-600 text-center mt-20'>
                 <div classNameName='bg-white text-black px-8 md:px-16 lg:px-24  flex flex-col justify-space md:flex-row'>
                   <div id="carouselExampleAutoplaying" className="carousel slide w-96" data-bs-ride="carousel">
                    <div className="carousel-inner w-96">
                      <div className="carousel-item active">
                         <img src={Ima} className="d-block w-100" alt="..."/>
                             <div className="carousel-caption d-inline d-md-block bg-yellow-800 text-white font-bold">
                       <h5>first slide chicken</h5>
                      <p>first slide, nice chicken nothing special.</p>
                </div>
                </div>
     <div className="carousel-item">
       <img src={Imb} className="d-block w-100" alt="..."/>
       <div className="carousel-caption d-inline d-md-block bg-yellow-800 text-white font-bold">
        <h5>Second slide food</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
     </div>
     <div className="carousel-item">
       <img src={Imc} className="d-block w-100" alt="..."/>
       <div className="carousel-caption d-inline d-md-block bg-yellow-800 text-white font-bold">
        <h5>third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
     </div>
   </div>
   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
     <span className="visually-hidden">Previous</span>
   </button>
   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
     <span className="carousel-control-next-icon" aria-hidden="true"></span>
     <span className="visually-hidden">Next</span>
   </button>
 </div>
 </div>
 </div>
 </div>
 </div>
 
  )
}

export default Home