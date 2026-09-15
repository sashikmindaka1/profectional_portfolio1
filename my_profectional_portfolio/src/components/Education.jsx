import React from 'react'

export default function Education() {
  return (
    <section className='bg-black pb-20'>

      {/* --- HEADER SECTION --- */}
      <div className='w-[90%] md:w-[85%] mx-auto pt-12 mb-10'>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-4 lg:gap-0'>
          
          {/* Main Title with #d4ff33 background, black text, and border */}
          <span className='font-sans font-black tracking-tighter text-[clamp(2.5rem,6vw,6rem)] whitespace-nowrap text-black inline-block border-4 border-[#d4ff33] bg-[#d4ff33] px-4 py-2 lg:px-6 lg:py-4'>
            MY EDUCATION
          </span>

          <span className='font-mono text-amber-100 pb-2 lg:pb-6'>// ACADEMIC JOURNEY</span>
        </div>
        <p className='border-b-2 border-dashed border-amber-500/30 py-4'></p>
      </div>

      {/* --- TIMELINE GRID SECTION --- */}
      <div className='grid grid-cols-[1fr_10%_1fr] gap-4 w-[90%] md:w-[85%] mx-auto'>

        {/* Education Item 1 */}
        <div className="bg-[#111315] border-2 border-dashed border-amber-500/60 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-amber-400 hover:bg-[#16191e] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] relative flex flex-col h-full">
          
          {/* Top Badge & Year */}
          <div className="flex justify-between items-start mb-6">
            <span className="bg-amber-500 text-black font-mono font-bold text-xs px-3 py-1 rounded-md uppercase tracking-widest">
              [ FUTURE GOAL ]
            </span>
            <span className="text-amber-500/50 font-mono text-sm font-bold">
              2029
            </span>
          </div>

          {/* Main Title */}
          <h3 className="font-sans font-black tracking-tighter text-3xl sm:text-4xl text-amber-50 mb-2 uppercase">
            MSc / MPhil <span className="text-amber-500">(Planning)</span>
          </h3>

          {/* Sub Details: University & Timeline */}
          <div className="flex flex-wrap items-center justify-between gap-y-2 font-mono text-sm sm:text-base text-gray-400 mb-6 border-b border-gray-800 pb-4">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              University Name (TBD)
            </p>
            <p className="text-amber-500/80 font-bold">
              2029 - Expected
            </p>
          </div>

          {/* Description */}
          <p className="font-mono text-sm sm:text-base text-gray-300 leading-relaxed">
            Planning to pursue postgraduate studies in Software Engineering, AI/ML, or related fields to advance research and development expertise.
          </p>
        </div>

        {/* Center timeline dividing line elements */}
        <div className='justify-self-center w-2 bg-blue-500 h-[calc(100%+2rem)]'></div>
        <div className='text-amber-50'></div>
        <div className='text-amber-50'></div>
        <div className='justify-self-center w-2 bg-blue-500 h-[calc(100%+2rem)]'></div>

        {/* Education Item 2 */}
        <div className="bg-[#111315] border-2 border-dashed border-amber-500/60 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-amber-400 hover:bg-[#16191e] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] relative flex flex-col h-full">
          
          {/* Top Badge & Year */}
          <div className="flex justify-between items-start mb-6">
            <span className="bg-amber-500 text-black font-mono font-bold text-xs px-3 py-1 rounded-md uppercase tracking-widest">
              [ FUTURE GOAL ]
            </span>
            <span className="text-amber-500/50 font-mono text-sm font-bold">
              2029
            </span>
          </div>

          {/* Main Title */}
          <h3 className="font-sans font-black tracking-tighter text-3xl sm:text-4xl text-amber-50 mb-2 uppercase">
            MSc / MPhil <span className="text-amber-500">(Planning)</span>
          </h3>

          {/* Sub Details: University & Timeline */}
          <div className="flex flex-wrap items-center justify-between gap-y-2 font-mono text-sm sm:text-base text-gray-400 mb-6 border-b border-gray-800 pb-4">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              University Name (TBD)
            </p>
            <p className="text-amber-500/80 font-bold">
              2029 - Expected
            </p>
          </div>

          {/* Description */}
          <p className="font-mono text-sm sm:text-base text-gray-300 leading-relaxed">
            Planning to pursue postgraduate studies in Software Engineering, AI/ML, or related fields to advance research and development expertise.
          </p>
        </div>

        <div></div>
        <div></div>
        <div></div>

        {/* Education Item 3 */}
        <div className="bg-[#111315] border-2 border-dashed border-amber-500/60 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-amber-400 hover:bg-[#16191e] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] relative flex flex-col h-full">
          
          {/* Top Badge & Year */}
          <div className="flex justify-between items-start mb-6">
            <span className="bg-amber-500 text-black font-mono font-bold text-xs px-3 py-1 rounded-md uppercase tracking-widest">
              [ FUTURE GOAL ]
            </span>
            <span className="text-amber-500/50 font-mono text-sm font-bold">
              2029
            </span>
          </div>

          {/* Main Title */}
          <h3 className="font-sans font-black tracking-tighter text-3xl sm:text-4xl text-amber-50 mb-2 uppercase">
            MSc / MPhil <span className="text-amber-500">(Planning)</span>
          </h3>

          {/* Sub Details: University & Timeline */}
          <div className="flex flex-wrap items-center justify-between gap-y-2 font-mono text-sm sm:text-base text-gray-400 mb-6 border-b border-gray-800 pb-4">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              University Name (TBD)
            </p>
            <p className="text-amber-500/80 font-bold">
              2029 - Expected
            </p>
          </div>

          {/* Description */}
          <p className="font-mono text-sm sm:text-base text-gray-300 leading-relaxed">
            Planning to pursue postgraduate studies in Software Engineering, AI/ML, or related fields to advance research and development expertise.
          </p>
        </div>

        {/* Center timeline ending line */}
        <div className='justify-self-center w-2 bg-blue-500 h-[calc(100%+2rem)]'></div>

      </div>
    </section>
  )
}