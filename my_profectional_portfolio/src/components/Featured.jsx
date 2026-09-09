import React from 'react'
import Travelmaniap from '../assests/travelmaniap.jpeg';


export default function Featured() {
  return (
    <section className='bg-[#0B0C0A] pt-25 pl-6'>

      <div>
        <span className='font-sans font-black tracking-tighter text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-black mt-4 bg-[#d4ff33]'>FEATURED.</span>


        <span className='font-sans font-black tracking-tighter text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-amber-50 mt-10 ml-10'>(PROJECT SHOWCASE)</span>
      </div>




      <div className='flex justify-between'>
        <div>
          <h1 className='mt-10 text-amber-200'>// CREATIVE BUILD SHOWCASE</h1>


      <div className='grid grid-cols-[1fr_10%_1fr] '>
        <div className='text-amber-50'>
          <div className='grid grid-cols-[1fr_3%_1fr]'>
           {/* frist grid */}

            <div>
              <p className='font-sans font-black tracking-tighter text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-amber-50 mt-4'>01</p>
              <p className='font-sans font-black tracking-tighter text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-amber-50 mt-4'>TRAVELMANIA</p>

              <img className='mt-6 md:mt-8 w-full '
                src={Travelmaniap} 
                alt="travelmania project" />

            </div>






            <div>
              {/* this is empty div , this div add for spacing 2nd colspan */}
            </div>




            <div>
              <button className='text-black bg-[#d4ff33] rounded-xl py-1 px-1'>[UNDIPLOYED]</button>

              <p className='font-mono font-black tracking-tighter text-1xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-2xl text-amber-50 mt-4'>Travel Management Platform</p>
              <p className='font-mono font-black tracking-tighter text-1xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-2xl text-amber-50 mt-7'>Fullstack WEB Platform /</p>

              <p className='font-mono font-black tracking-tighter text-1xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-1xl text-amber-50 mt-14'>A full-Stack solution for fragmented travel experience</p>


              <div className='grid grid-cols-3 gap-4 mt-4'>
                <button className='text-black bg-[#d4ff33] rounded-xl py-1 px-1'>React</button>
              <button className='text-black bg-[#d4ff33] rounded-xl py-1 px-1'>Springboot</button>
              <button className='text-black bg-[#d4ff33] rounded-xl py-1 px-1'>prostate sql</button>
              <button className='text-black bg-[#d4ff33] rounded-xl py-1 px-1'>Rest Api</button>

              </div>

              <div className='grid grid-cols-2 gap-5'>
                <button className='text-[#FF0000] bg-[#000000]  border-2 rounded-xl hover:text-black hover:bg-[#FF0000] py-1 px-1 mt-8'>View in Github</button>

                 <button className='text-[#4dff00] bg-[#000000]  border-2 rounded-xl hover:text-black hover:bg-[#4dff00] py-1 px-1 mt-8'>Live demo</button>
              </div>


              
               
              
            </div>
            







          </div>
          
        </div>




        <div className='text-amber-50'></div>
        <div className='text-amber-50'>
          <div className='grid grid-cols-[1fr_3%_1fr]'>
           {/* frist grid */}

            <div>
              <p className='font-sans font-black tracking-tighter text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-amber-50 mt-4'>01</p>
              <p className='font-sans font-black tracking-tighter text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-amber-50 mt-4'>TRAVELMANIA</p>

              <img className='mt-6 md:mt-8 w-full '
                src={Travelmaniap} 
                alt="travelmania project" />

            </div>






            <div>
              {/* this is empty div , this div add for spacing 2nd colspan */}
            </div>




            <div>
              <button className='text-black bg-[#d4ff33] rounded-xl py-1 px-1'>[UNDIPLOYED]</button>

              <p className='font-mono font-black tracking-tighter text-1xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-2xl text-amber-50 mt-4'>Travel Management Platform</p>
              <p className='font-mono font-black tracking-tighter text-1xl sm:text-1xl md:text-1xl lg:text-2xl xl:text-2xl text-amber-50 mt-7'>Fullstack WEB Platform /</p>

              <p className='font-mono font-black tracking-tighter text-1xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-1xl text-amber-50 mt-14'>A full-Stack solution for fragmented travel experience</p>


              <div className='grid grid-cols-3 gap-4 mt-4'>
                <button className='text-black bg-[#d4ff33] rounded-xl py-1 px-1'>React</button>
              <button className='text-black bg-[#d4ff33] rounded-xl py-1 px-1'>Springboot</button>
              <button className='text-black bg-[#d4ff33] rounded-xl py-1 px-1'>prostate sql</button>
              <button className='text-black bg-[#d4ff33] rounded-xl py-1 px-1'>Rest Api</button>

              </div>

              <div className='grid grid-cols-2 gap-5'>
                <button className='text-[#FF0000] bg-[#000000]  border-2 rounded-xl hover:text-black hover:bg-[#FF0000] py-1 px-1 mt-8'>View in Github</button>

                 <button className='text-[#4dff00] bg-[#000000]  border-2 rounded-xl hover:text-black hover:bg-[#4dff00] py-1 px-1 mt-8'>Live demo</button>
              </div>


              
               
              
            </div>
            







          </div>
          
        </div>
        <div className='text-amber-50'>04</div>
       


        
       

      </div>
          






































         
        </div>

        

      </div>


    </section>
  )
}
