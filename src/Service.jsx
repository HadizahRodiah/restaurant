import React from 'react'
import Img from './assets/Img.jpg'
import Clock from './assets/clock.jpg'
import Custom from './assets/custom.jpg'
import Imo from './assets/Imo.jpg'
import Ime from './assets/Ime.jpg'
import pack from './assets/pack.jpg'
import * as Icons from 'react-bootstrap-icons';
const Service = () => {
  return (
    <div className='py-20'>
    <div className=' py-20 bg-gradient-to-r from-green-300 to-slate-200 text-yellow-800 px-8 md:px-18 lg:px-24 ' id='service'>
    <div className='flex flex-col py-14 justify-between md:flex-col items-center  md:space-x-12'>
    <Icons.Screwdriver width={96} height={96} className='text-yellow-700'/>
       <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-800'>Our Service</h1>
  <p>The wonderful service we provide makes us unique and stand out </p>      
   <div className='flex flex-row flex-wrap justify-between shadow-lg'>
       <figure className="card bg-green-300 p-5 m-10">
       <Icons.Scooter width={50} height={50} className='text-black bg-yellow-800 rounded rounded-full ml-20'/>
  <img src={Img} width={200} height={200}  className="figure-img img-fluid rounded" alt="..."/>
  <figcaption className="figure-caption font-bold text-black mr-7">Fast and swift delivery</figcaption>
 </figure>
 
<figure className="card  bg-green-300 m-10">
<Icons.Clock width={40} height={40} className='text-black bg-yellow-800 rounded rounded-full ml-20'/>
  <img src={Clock} width={200} height={200}  className="figure-img img-fluid rounded" alt="..."/>
  <figcaption className="figure-caption font-bold text-black  mr-7">Our service is 24/7</figcaption>
</figure>
<figure className=" card bg-green-300 m-10">
<Icons.Phone width={40} height={40} className='text-black bg-yellow-800 rounded rounded-full ml-20'/>
  <img src={Custom} width={200} height={200}  className="figure-img img-fluid rounded" alt="..."/>
  <figcaption className="figure-caption font-bold text-black  mr-7">a quality and swift customer service</figcaption>
</figure>

<figure className=" card bg-green-300   m-10">
<Icons.CashStack width={40} height={40} className='text-black bg-yellow-800 rounded rounded-full ml-20'/>
<img src={Imo} width={200} height={200}  className="figure-img img-fluid rounded" alt="..."/>
  <figcaption className="figure-caption font-bold text-black  mr-7">very Affordable delicacy</figcaption>
</figure>
<figure className="card bg-green-300  m-10">
<Icons.CupHot width={40} height={40} className='text-black bg-yellow-800 rounded rounded-full ml-20'/>
  <img src={Ime} width={200} height={200}  className="figure-img img-fluid rounded" alt="..."/>
  <figcaption className="figure-caption font-bold text-black  mr-7">Our delicacies are served and delivered Hot</figcaption>
</figure>
<figure className="card bg-green-300   m-10">
<Icons.Box2Heart width={40} height={40} className='text-black bg-yellow-800 rounded rounded-full ml-20'/>
  <img src={pack} width={200} height={200}  className="figure-img img-fluid rounded" alt="..."/>
  <figcaption className="figure-caption font-bold text-black  mr-7">Nice and disposable Packaging</figcaption>
</figure>
</div>
</div>
</div>
</div>
  )
}

export default Service