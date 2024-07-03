import React from 'react'
import teer from '../Landing Page Images/vector.svg'

function ChotiPic(pic ,tittle) {
  return (
    <div className='ChotiPic'>
        <img src={pic} alt="" />
       <h3>{tittle}</h3>
       <p>Learn More<img src={teer} alt="" /></p>
    </div>
  )
}

export default ChotiPic