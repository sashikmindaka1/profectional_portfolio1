import React from 'react'
import myimg1 from '../assests/Untitled design (15).png';


export default function HeroSection() {
  return (
    <section className='bg-[#040811] min-h-screen py-20 px-8 flex items-center justify-center'>
      

      <div className='w-full max-w-[95%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10'>
        
   
        <div className='w-full lg:w-1/2'>
          <h1 className='black-ops-one-regular tracking-wide text-white text-4xl lg:text-8xl leading-tight'>
            I solve problems. <br />
            I craft digital <br />
            experiences. <br />
            I think like an <br />
            engineer.
          </h1>
        </div>

        <div className='w-full lg:w-1/2 flex lg:justify-end' >
          <img 
            src={myimg1} 
            alt="my image 1" 
  
            className='w-72 lg:w-170 h-auto object-cover rounded-2xl animate-float'
          />
        </div>

      </div>
      
    </section>
  );
}