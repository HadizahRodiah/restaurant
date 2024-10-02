import './App.css'
import React from 'react'
import  Nav from './Nav.jsx'
import Home from './Home.jsx'
import Good from './Good.jsx'
import Footer from './Footer.jsx'
import Review from './Review.jsx'
import Menu from './Menu.jsx'
import Reserve from './Reserve.jsx'

function App() {
  

  return (
   <div className='overflow-x-hidden '>
<Nav/>
<Home/>
<Menu/>
<Good/>
<Reserve/>
<Review/>
<Footer/>
    </div>
  )
}

export default App
