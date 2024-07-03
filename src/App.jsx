
import Navbar from './Navbar/Navbar'  
import cursalPic from '../src/Landing Page Images/1.ddb463a076b58bbe0ea3.jpg'
import cursalPic2 from '../src/Landing Page Images/2.924b429a0601a89b04e1.jpg'

import './index.css';
import React from 'react'
import midePic from '../src/Landing Page Images/download 1.png'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import callPic from './Landing Page Images/vector4.svg'
import emailPic from './Landing Page Images/vector2.svg'
import ChotiPic from './ChotiPic/ChotiPic'
import ChotiPic1 from './Landing Page Images/1.045ce5893b04f4bde993.png'


const App = () => {

  return (
    <div>
      <div style={{backgroundColor: "#00306E"}} className=''>
        <span className='text-white m-5'><img  src= {callPic} alt="" /> (+1) 3344 999 999</span> 
        <span className='text-white'><img src={emailPic} alt="" />info@reactheme.com</span>
      </div>
      < Navbar />
      {/* nave Bar Start */}

      {/* <div id="carouselExampleCaptions" class="carousel slide"> */}
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src= {cursalPic} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={cursalPic2} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    </div>
    
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

      <div className='mide'>
        <h1 className='aca'>Academics</h1><br />
      <img src={midePic} alt="" /><br />
      
      <div>
        
      </div>
      
        </div><br />
        {/* < ChotiPic pic={ChotiPic1} tittle={lorem5} /> */}
        
        
    </div>
  )
}

export default App


