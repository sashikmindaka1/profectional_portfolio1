import React from 'react'
import myimg1 from '../assests/Untitled design (15).png';


export default function Hero() {
  return (
    <section className='bg-[#040811]'>

      <div className='w-64 mx-auto lg:w-1/2'>
    <img 
      src={myimg1} 
      alt="my image 1" 
      
      className='ml-100 mb-20 w-full h-auto object-cover rounded-2xl shadow-lg' 
    />
  </div>

  <div>
    
  </div>

  
    </section>
  )
}
