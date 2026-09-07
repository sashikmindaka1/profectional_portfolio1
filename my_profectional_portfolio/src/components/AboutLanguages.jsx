import React from 'react'

export default function AboutLanguages() {
  return (
    <section className='bg-amber-100'> 
      <div>
        <h1>
          <span className='text-8xl font-sans font-black tracking-tighter'>WHAT I WORK WITH</span>
          
          <span >// LANGUAGES AND TOOLS</span>
          </h1>

          <div className='bg-[#d4ff33]'>
            <span className=' font-sans font-black tracking-tighter text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl text-black mt-4'>01</span>
            <span className='font-sans font-black tracking-tighter text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-black mt-4'>FRONTEND</span>
            <span className='flex gap-4'>
                  <button  className='border-2 bg-amber-50 rounded-4xl px-4 py-1 hover:bg-blue-950 hover:text-amber-50 transition-colors duration-300 '>  React  </button>
                  <button  className='border-2 bg-amber-50 rounded-4xl px-6 py-1 hover:bg-blue-950 hover:text-amber-50 transition-colors duration-300'>vite</button>
                  <button className='border-2 bg-amber-50 rounded-4xl px-4 py-1 hover:bg-blue-950 hover:text-amber-50 transition-colors duration-300'>tailwind css</button>
                  <button className='border-2 bg-amber-50 rounded-4xl px-6 py-1 hover:bg-blue-950 hover:text-amber-50 transition-colors duration-300'>next Js</button>
            </span>
          
          <p>Crafting fast, responsive, and dynamic user interfaces. Highly familiar with the React and Vite ecosystems.</p>

          </div>






      </div>
    </section>
  )
}
