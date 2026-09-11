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


      <div className='grid grid-cols-[1fr_10%_1fr]  '>
       <div className="text-amber-50 border border-dashed border-gray-700 p-4 sm:p-6 md:p-8 rounded-2xl">
  {/* Mobile 1 Column, Desktop 3-Column layout */}
  <div className="grid grid-cols-1 md:grid-cols-[1fr_3%_1fr] gap-6 md:gap-0">
    
    {/* FIRST COLUMN: Title & Image */}
    <div className="flex flex-col justify-between">
      <div>
        <p className="font-sans font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl text-amber-50">
          01
        </p>
        <p className="font-sans font-black tracking-tighter text-3xl sm:text-4xl lg:text-5xl text-amber-50 mt-2">
          TRAVELMANIA
        </p>
      </div>

      <img
        className="mt-6 w-full rounded-xl object-cover shadow-lg"
        src={Travelmaniap}
        alt="travelmania project"
      />
    </div>

    {/* SECOND COLUMN: Spacing ( not showing Mobile) */}
    <div className="hidden md:block">
      {/* Empty div for spacing in 3-column layout */}
    </div>

    {/* THIRD COLUMN: Details & Buttons */}
    <div className="flex flex-col justify-between mt-4 md:mt-0">
      <div>
        <button className="text-black bg-[#d4ff33] font-mono font-bold text-xs rounded-xl py-1 px-3">
          [UNDEPLOYED]
        </button>

        <p className="font-mono font-bold tracking-tight text-lg sm:text-xl text-amber-50 mt-4">
          Travel Management Platform
        </p>
        <p className="font-mono font-bold tracking-tight text-base sm:text-lg text-amber-100/70 mt-1">
          Fullstack WEB Platform /
        </p>

        <p className="font-mono text-sm sm:text-base text-gray-300 mt-6 leading-relaxed">
          A full-stack solution for fragmented travel experiences.
        </p>

        {/* Tech Stack Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-6">
          <button className="text-[#d4ff33] bg-[#0B0C0A] border border-[#d4ff33]/40 rounded-xl py-1.5 px-2 text-xs font-mono hover:text-black hover:bg-[#d4ff33] transition-all">
            React
          </button>
          <button className="text-[#d4ff33] bg-[#0B0C0A] border border-[#d4ff33]/40 rounded-xl py-1.5 px-2 text-xs font-mono hover:text-black hover:bg-[#d4ff33] transition-all">
            Spring Boot
          </button>
          <button className="text-[#d4ff33] bg-[#0B0C0A] border border-[#d4ff33]/40 rounded-xl py-1.5 px-2 text-xs font-mono hover:text-black hover:bg-[#d4ff33] transition-all">
            PostgreSQL
          </button>
          <button className="text-[#d4ff33] bg-[#0B0C0A] border border-[#d4ff33]/40 rounded-xl py-1.5 px-2 text-xs font-mono hover:text-black hover:bg-[#d4ff33] transition-all">
            REST API
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8">
        <button className="text-[#FF4D4D] bg-black border border-[#FF4D4D] font-mono font-bold text-sm rounded-xl hover:text-black hover:bg-[#FF4D4D] py-2 px-3 transition-all">
          View in Github
        </button>

        <button className="text-[#4dff00] bg-black border border-[#4dff00] font-mono font-bold text-sm rounded-xl hover:text-black hover:bg-[#4dff00] py-2 px-3 transition-all">
          Live Demo
        </button>
      </div>
    </div>

  </div>
</div>



        <div className='text-amber-50'></div>
    <div className="text-amber-50 border border-dashed border-gray-700 p-4 sm:p-6 md:p-8 rounded-2xl">
  {/* Mobile  1 Column, Desktop  3-Column layout */}
  <div className="grid grid-cols-1 md:grid-cols-[1fr_3%_1fr] gap-6 md:gap-0">
    
    {/* FIRST COLUMN: Title & Image */}
    <div className="flex flex-col justify-between">
      <div>
        <p className="font-sans font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl text-amber-50">
          01
        </p>
        <p className="font-sans font-black tracking-tighter text-3xl sm:text-4xl lg:text-5xl text-amber-50 mt-2">
          TRAVELMANIA
        </p>
      </div>

      <img
        className="mt-6 w-full rounded-xl object-cover shadow-lg"
        src={Travelmaniap}
        alt="travelmania project"
      />
    </div>

    {/* SECOND COLUMN: Spacing (not showing Mobile) */}
    <div className="hidden md:block">
      {/* Empty div for spacing in 3-column layout */}
    </div>

    {/* THIRD COLUMN: Details & Buttons */}
    <div className="flex flex-col justify-between mt-4 md:mt-0">
      <div>
        <button className="text-black bg-[#d4ff33] font-mono font-bold text-xs rounded-xl py-1 px-3">
          [UNDEPLOYED]
        </button>

        <p className="font-mono font-bold tracking-tight text-lg sm:text-xl text-amber-50 mt-4">
          Travel Management Platform
        </p>
        <p className="font-mono font-bold tracking-tight text-base sm:text-lg text-amber-100/70 mt-1">
          Fullstack WEB Platform /
        </p>

        <p className="font-mono text-sm sm:text-base text-gray-300 mt-6 leading-relaxed">
          A full-stack solution for fragmented travel experiences.
        </p>

        {/* Tech Stack Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-6">
          <button className="text-[#d4ff33] bg-[#0B0C0A] border border-[#d4ff33]/40 rounded-xl py-1.5 px-2 text-xs font-mono hover:text-black hover:bg-[#d4ff33] transition-all">
            React
          </button>
          <button className="text-[#d4ff33] bg-[#0B0C0A] border border-[#d4ff33]/40 rounded-xl py-1.5 px-2 text-xs font-mono hover:text-black hover:bg-[#d4ff33] transition-all">
            Spring Boot
          </button>
          <button className="text-[#d4ff33] bg-[#0B0C0A] border border-[#d4ff33]/40 rounded-xl py-1.5 px-2 text-xs font-mono hover:text-black hover:bg-[#d4ff33] transition-all">
            PostgreSQL
          </button>
          <button className="text-[#d4ff33] bg-[#0B0C0A] border border-[#d4ff33]/40 rounded-xl py-1.5 px-2 text-xs font-mono hover:text-black hover:bg-[#d4ff33] transition-all">
            REST API
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8">
        <button className="text-[#FF4D4D] bg-black border border-[#FF4D4D] font-mono font-bold text-sm rounded-xl hover:text-black hover:bg-[#FF4D4D] py-2 px-3 transition-all">
          View in Github
        </button>

        <button className="text-[#4dff00] bg-black border border-[#4dff00] font-mono font-bold text-sm rounded-xl hover:text-black hover:bg-[#4dff00] py-2 px-3 transition-all">
          Live Demo
        </button>
      </div>
    </div>

  </div>
</div>
</ div>




































         
        </div>

        

      </div>


    </section>
  )
}
