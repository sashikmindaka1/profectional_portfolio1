import React from 'react'

export default function AboutLanguages() {
  return (
    <section className='bg-amber-100'> 
      <div className='justify-between'>
        <h1>
          <span className='font-sans font-black tracking-tighter text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-black mt-4'>WHAT I WORK WITH</span>
          
          <span >// LANGUAGES AND TOOLS</span>
          </h1>

          <div className='bg-[#d4ff33] flex flex-col lg:flex-row flex justify-between'>

            <div>

              <span className=' font-sans font-black tracking-tighter text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl text-black mt-4'>01</span>
            <span className='font-sans font-black tracking-tighter text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-black mt-4'>FRONTEND</span>

            <p className='text-black font-mono text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-left max-w-4xl pt-10 md:pt-5 pl-13'>Crafting fast, responsive, and dynamic user interfaces. Highly familiar with the React and Vite ecosystems.</p>

            </div>

            <div>

              <span className='flex gap-4 lg:mt-15 lg:mr-30'>

                  <button  className='border-2 bg-amber-50 rounded-full px-2 py-1 lg:px-6 lg:py-2 hover:bg-blue-950 hover:text-amber-50 transition-colors duration-300 '>  React  </button>
                  <button  className='border-2 bg-amber-50 rounded-full px-2 py-1 lg:px-6 lg:py-2 hover:bg-blue-950 hover:text-amber-50 transition-colors duration-300 '>vite</button>
                  <button className='border-2 bg-amber-50 rounded-full px-2 py-1 lg:px-6 lg:py-2 hover:bg-blue-950 hover:text-amber-50 transition-colors duration-300 '>tailwind css</button>
                  <button className='border-2 bg-amber-50 rounded-full px-2 py-1 lg:px-6 lg:py-2 hover:bg-blue-950 hover:text-amber-50 transition-colors duration-300 '>next Js</button>
            </span>
          

            </div>


          </div>

      </div>
    </section>
  )
}
