import React from 'react'

export default function ManifestoSection() {
  return (
    <section className='bg-[#0B0C0A]'>
      {/* තිරය ලොකු වෙද්දී Padding එකත් ටික ටික ලොකු වෙනවා */}
      <div className='px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 pt-16 pb-20'>
        
        <p className='text-gray-400 font-mono text-xs sm:text-sm lg:text-base leading-relaxed mb-6'>
          //FULLSTACK ENGINEER
        </p>

        {/* අකුරු සයිස් එක පියවර 5කින් වෙනස් වෙනවා (4xl ඉඳන් 9xl වෙනකන්) */}
        <h1 className='font-sans font-black tracking-tighter text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-9xl text-amber-50 mt-4'>
          <span className='block md:inline'>I BUILD </span>
          <span className='text-[#0B0C0A] bg-[#d4ff33] px-3 py-1 md:px-5 md:py-2 inline-block mt-2 md:mt-0'>FRONT.</span>
        </h1>
        
        <h1 className='font-sans font-black tracking-tighter text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-amber-50 mt-4 lg:mt-2'>
          <span className='block md:inline'>I BUILD </span>
          <span className='text-[#0B0C0A] bg-[#86efac] px-3 py-1 md:px-5 md:py-2 inline-block mt-2 md:mt-0'>BACK.</span>
        </h1>

        <h1 className='font-sans font-black tracking-tighter text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-amber-50 mt-4 lg:mt-2'>
          <span className='block md:inline'>I TEST </span>
          <span className='text-[#0B0C0A] bg-[#fbbf24] px-3 py-1 md:px-5 md:py-2 inline-block mt-2 md:mt-0'>EVERYTHING.</span>
        </h1>

        <p className='text-gray-400 font-mono text-xs sm:text-sm md:text-base leading-relaxed text-left max-w-4xl pt-10 md:pt-16'>
          "I am Sashik Mindaka, a Software Engineering undergraduate at NSBM Green University. Why rely on a distributed team when one focused engineer can connect all the dots? From crafting React frontends to architecting Java Spring Boot APIs and MySQL databases, the entire ecosystem rests in a single pair of hands. Whether building platforms like TravelMania or complex management systems, I handle the full lifecycle. No handoffs, no communication silos—just complete, end-to-end digital experiences built with an engineering mindset."
        </p>
        
      </div>
    </section>
  )
}