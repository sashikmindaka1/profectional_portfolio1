import React from 'react'
import { motion } from 'framer-motion'

export default function AboutLanguages() {
  return (
    // Main motion section with smooth slide-up and fade-in scroll animation
    <motion.section 
      className='bg-[#1A1A1A] pl-4 lg:pl-8 overflow-hidden'
      initial={{ opacity: 0, y: 60 }}        
      whileInView={{ opacity: 1, y: 0 }}  
      viewport={{ once: true, amount: 0.1 }} 
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className='justify-between'>
        
        {/* --- HEADER SECTION WITH DRAMATIC SCALE ANIMATION --- */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end w-full px-6 gap-4 lg:gap-0'>
            
            {/* Main Title with #d4ff33 background */}
            <span className='font-sans font-black tracking-tighter text-[clamp(2.5rem,6vw,8rem)] whitespace-nowrap text-black inline-block border-4 border-[#d4ff33] bg-[#d4ff33] px-4 py-2 lg:px-6 lg:py-4 mt-20 lg:mt-24 shadow-[0_0_30px_rgba(212,255,51,0.2)]'>
              WHAT I WORK WITH
            </span>

            <span className='font-mono text-amber-100 pb-2 lg:pb-6 px-4 lg:px-16 xl:px-24 '>// LANGUAGES AND TOOLS</span>
          </div>
          <p className='border-b-2 border-dashed border-amber-50 py-4'></p>
        </motion.h1>

        {/* --- FRONTEND SECTION --- */}
        <div className='group bg-[#1A1A1A] hover:bg-[#d4ff33] active:bg-[#d4ff33] flex flex-col lg:flex-row justify-between transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl cursor-pointer'>
          <div>
            <span className='font-sans font-black tracking-tighter text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl text-gray-400 group-hover:text-black transition-colors duration-300 mt-4'>01</span>
            <span className='font-sans font-black tracking-tighter text-5xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl text-amber-50 group-hover:text-black transition-colors duration-300 mt-4'>FRONTEND</span>
            <p className='text-amber-50 group-hover:text-black font-mono text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-left max-w-4xl pt-10 md:pt-5 pb-10 md:pb-6 pl-13 transition-colors duration-300'>"Crafting fast, responsive, and dynamic user interfaces. Highly familiar with the React and Vite ecosystems."</p>
          </div>
          <div>
            <span className='flex flex-wrap gap-4 lg:mt-15 lg:mr-30'>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-2 py-1 lg:px-6 lg:py-2 transition-all duration-300'>React</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-2 py-1 lg:px-6 lg:py-2 transition-all duration-300'>Vite</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-2 py-1 lg:px-6 lg:py-2 transition-all duration-300'>Tailwind CSS</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-2 py-1 lg:px-6 lg:py-2 transition-all duration-300'>Next.js</button>
            </span>
          </div>
        </div>
      </div>

      {/* --- BACKEND SECTION --- */}
      <div className='justify-between '>
        <p className='border-b-2 border-dashed border-amber-50'></p>
        
        <div className='group bg-[#1A1A1A] hover:bg-[#d4ff33] active:bg-[#d4ff33] flex flex-col lg:flex-row justify-between transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl cursor-pointer'>
          <div>
            <span className='font-sans font-black tracking-tighter text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl text-gray-400 group-hover:text-black transition-colors duration-300 mt-4'>02</span>
            <span className='font-sans font-black tracking-tighter text-5xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl text-amber-50 group-hover:text-black transition-colors duration-300 mt-4'>BACKEND</span>
            <p className='text-amber-50 group-hover:text-black font-mono text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-left max-w-4xl pt-10 md:pt-5 pl-13 pb-10 md:pb-6 transition-colors duration-300'>"Architecting robust, secure, and scalable server-side systems and enterprise-grade RESTful APIs leveraging Java and Spring Boot."</p>
          </div>
          <div>
            <span className='flex flex-wrap gap-4 lg:mt-15 lg:mr-30'>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-2 py-1 lg:px-6 lg:py-2 transition-all duration-300'>Java</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-2 py-1 lg:px-6 lg:py-2 transition-all duration-300'>Spring Boot</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-2 py-1 lg:px-6 lg:py-2 transition-all duration-300'>REST API</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-2 py-1 lg:px-6 lg:py-2 transition-all duration-300'>Maven</button>
            </span>
          </div>
        </div>
      </div>

      {/* --- DATABASE SECTION --- */}
      <div className='justify-between '>
        <p className='border-b-2 border-dashed border-amber-50'></p>
        
        <div className='group bg-[#1A1A1A] hover:bg-[#d4ff33] active:bg-[#d4ff33] flex flex-col lg:flex-row justify-between transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl cursor-pointer'>
          <div>
            <span className='font-sans font-black tracking-tighter text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl text-gray-400 group-hover:text-black transition-colors duration-300 mt-4'>03</span>
            <span className='font-sans font-black tracking-tighter text-5xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl text-amber-50 group-hover:text-black transition-colors duration-300 mt-4'>DATABASE</span>
            <p className='text-amber-50 group-hover:text-black font-mono text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-left max-w-4xl pt-10 md:pt-5 pl-13 pb-10 md:pb-6 transition-colors duration-300'>"Designing efficient and optimized data architectures. Experienced in managing both relational and non-relational databases including MySQL, PostgreSQL, and MongoDB."</p>
          </div>
          <div>
            <span className='flex flex-wrap gap-4 lg:mt-15 lg:mr-30'>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-2 py-1 lg:px-6 lg:py-2 transition-all duration-300'>MySQL</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-2 py-1 lg:px-6 lg:py-2 transition-all duration-300'>PostgreSQL</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-2 py-1 lg:px-6 lg:py-2 transition-all duration-300'>MongoDB</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-2 py-1 lg:px-6 lg:py-2 transition-all duration-300'>SQL / NoSQL</button>
            </span>
          </div>
        </div>
      </div>

      {/* --- TESTING SECTION --- */}
      <div className='justify-between '>
        <p className='border-b-2 border-dashed border-amber-50'></p>
        
        <div className='group bg-[#1A1A1A] hover:bg-[#d4ff33] active:bg-[#d4ff33] flex flex-col lg:flex-row justify-between transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl cursor-pointer'>
          <div>
            <span className='font-sans font-black tracking-tighter text-2xl sm:text-2xl md:text-5xl lg:text-5xl xl:text-5xl text-gray-400 group-hover:text-black transition-colors duration-300 mt-4'>04</span>
            <span className='font-sans font-black tracking-tighter text-5xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl text-amber-50 group-hover:text-black transition-colors duration-300 mt-4'>TESTING</span>
            <p className='text-amber-50 group-hover:text-black font-mono text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-left max-w-4xl pt-10 md:pt-5 pl-13 pb-10 md:pb-6 transition-colors duration-300'>"Ensuring seamless API performance and code reliability through rigorous validation and endpoint testing using Postman, JUnit, and Swagger."</p>
          </div>
          <div>
            <span className='flex flex-wrap gap-4 lg:mt-15 lg:mr-30'>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-2 py-1 lg:px-6 lg:py-2 transition-all duration-300'>Postman</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-2 py-1 lg:px-6 lg:py-2 transition-all duration-300'>JUnit</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-2 py-1 lg:px-6 lg:py-2 transition-all duration-300'>Swagger</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-2 py-1 lg:px-6 lg:py-2 transition-all duration-300'>Jest</button>
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  )
}