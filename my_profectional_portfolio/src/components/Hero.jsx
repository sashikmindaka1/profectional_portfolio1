import React from 'react'
import myimg1 from '../assests/Untitled design (15).png';


export default function Hero() {
  return (
    <section className='bg-[#040811]'>

      <div className='w-64 mx-auto lg:w-1/2'>

      <dev className='text-white text-8xl'>
        <p>I solve problems. </p>
        <p>I craft digital experiences.</p>
        <p>I think like an engineer.</p>
        
      </dev>

    <img 
      src={myimg1} 
      alt="my image 1" 
      
      className='ml-120 mb-80 w-full h-auto object-cover rounded-2xl shadow-lg' 
    />
  </div>

  <div>
    
  </div>

  
    </section>
  )
}
