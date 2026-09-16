import React from 'react';
import { motion } from 'framer-motion';

export default function AboutLanguages() {
  return (
    // Main motion section with smooth slide-up and fade-in scroll animation
    // Added 'px-4 lg:px-8' instead of just 'pl-4' to prevent horizontal scroll issues on mobile
    <motion.section 
      className='bg-[#1A1A1A] px-4 lg:px-8 overflow-hidden pb-20'
      initial={{ opacity: 0, y: 60 }}        
      whileInView={{ opacity: 1, y: 0 }}  
      viewport={{ once: true, amount: 0.1 }} 
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className='justify-between max-w-[1600px] mx-auto'>
        
        {/* --- HEADER SECTION WITH DRAMATIC SCALE ANIMATION --- */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className='flex flex-col xl:flex-row justify-between items-start xl:items-end w-full gap-4 lg:gap-0'>
            
            {/* Main Title with #d4ff33 background */}
            <span className='font-sans font-black tracking-tighter text-[clamp(2rem,6vw,8rem)] text-black inline-block border-4 border-[#d4ff33] bg-[#d4ff33] px-4 py-2 lg:px-6 lg:py-4 mt-16 lg:mt-24 shadow-[0_0_30px_rgba(212,255,51,0.2)]'>
              WHAT I WORK WITH
            </span>

            <span className='font-mono text-amber-100 pb-2 lg:pb-6 text-sm md:text-base'>
              // LANGUAGES AND TOOLS
            </span>
          </div>
          <p className='border-b-2 border-dashed border-amber-50 py-4'></p>
        </motion.h1>

        {/* --- FRONTEND SECTION --- */}
        {/* 
          Restructured using proper flex-col on mobile and flex-row on large screens. 
          Added padding (p-6 lg:p-10) for better hover area.
        */}
        <div className='group bg-[#1A1A1A] hover:bg-[#d4ff33] active:bg-[#d4ff33] flex flex-col lg:flex-row justify-between items-start lg:items-center transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl cursor-pointer p-6 lg:p-10 border-b-2 border-dashed border-amber-50'>
          
          {/* Left Side: Number, Title, and Description */}
          <div className='w-full lg:w-2/3'>
            <div className='flex items-baseline gap-4'>
              <span className='font-sans font-black tracking-tighter text-3xl md:text-5xl text-gray-400 group-hover:text-black transition-colors duration-300'>01</span>
              <span className='font-sans font-black tracking-tighter text-4xl md:text-6xl xl:text-8xl text-amber-50 group-hover:text-black transition-colors duration-300'>FRONTEND</span>
            </div>
            {/* Replaced non-standard 'pl-13' with standard 'mt-4 lg:pl-16' for perfect alignment */}
            <p className='text-amber-50 group-hover:text-black font-mono text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-left max-w-4xl mt-4 lg:ml-16 transition-colors duration-300'>
              "Crafting fast, responsive, and dynamic user interfaces. Highly familiar with the React and Vite ecosystems."
            </p>
          </div>

          {/* Right Side: Skill Buttons */}
          <div className='w-full lg:w-1/3 mt-6 lg:mt-0 flex lg:justify-end'>
            <div className='flex flex-wrap gap-3'>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-4 py-1.5 lg:px-6 lg:py-2 text-xs md:text-sm font-bold transition-all duration-300'>React</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-4 py-1.5 lg:px-6 lg:py-2 text-xs md:text-sm font-bold transition-all duration-300'>Vite</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-4 py-1.5 lg:px-6 lg:py-2 text-xs md:text-sm font-bold transition-all duration-300'>Tailwind CSS</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-4 py-1.5 lg:px-6 lg:py-2 text-xs md:text-sm font-bold transition-all duration-300'>Next.js</button>
            </div>
          </div>
        </div>

        {/* --- BACKEND SECTION --- */}
        <div className='group bg-[#1A1A1A] hover:bg-[#d4ff33] active:bg-[#d4ff33] flex flex-col lg:flex-row justify-between items-start lg:items-center transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl cursor-pointer p-6 lg:p-10 border-b-2 border-dashed border-amber-50'>
          <div className='w-full lg:w-2/3'>
            <div className='flex items-baseline gap-4'>
              <span className='font-sans font-black tracking-tighter text-3xl md:text-5xl text-gray-400 group-hover:text-black transition-colors duration-300'>02</span>
              <span className='font-sans font-black tracking-tighter text-4xl md:text-6xl xl:text-8xl text-amber-50 group-hover:text-black transition-colors duration-300'>BACKEND</span>
            </div>
            <p className='text-amber-50 group-hover:text-black font-mono text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-left max-w-4xl mt-4 lg:ml-16 transition-colors duration-300'>
              "Architecting robust, secure, and scalable server-side systems and enterprise-grade RESTful APIs leveraging Java and Spring Boot."
            </p>
          </div>
          <div className='w-full lg:w-1/3 mt-6 lg:mt-0 flex lg:justify-end'>
            <div className='flex flex-wrap gap-3'>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-4 py-1.5 lg:px-6 lg:py-2 text-xs md:text-sm font-bold transition-all duration-300'>Java</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-4 py-1.5 lg:px-6 lg:py-2 text-xs md:text-sm font-bold transition-all duration-300'>Spring Boot</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-4 py-1.5 lg:px-6 lg:py-2 text-xs md:text-sm font-bold transition-all duration-300'>REST API</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-4 py-1.5 lg:px-6 lg:py-2 text-xs md:text-sm font-bold transition-all duration-300'>Maven</button>
            </div>
          </div>
        </div>

        {/* --- DATABASE SECTION --- */}
        <div className='group bg-[#1A1A1A] hover:bg-[#d4ff33] active:bg-[#d4ff33] flex flex-col lg:flex-row justify-between items-start lg:items-center transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl cursor-pointer p-6 lg:p-10 border-b-2 border-dashed border-amber-50'>
          <div className='w-full lg:w-2/3'>
            <div className='flex items-baseline gap-4'>
              <span className='font-sans font-black tracking-tighter text-3xl md:text-5xl text-gray-400 group-hover:text-black transition-colors duration-300'>03</span>
              <span className='font-sans font-black tracking-tighter text-4xl md:text-6xl xl:text-8xl text-amber-50 group-hover:text-black transition-colors duration-300'>DATABASE</span>
            </div>
            <p className='text-amber-50 group-hover:text-black font-mono text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-left max-w-4xl mt-4 lg:ml-16 transition-colors duration-300'>
              "Designing efficient and optimized data architectures. Experienced in managing both relational and non-relational databases including MySQL, PostgreSQL, and MongoDB."
            </p>
          </div>
         <div className='w-full lg:w-1/3 mt-6 lg:mt-0 flex lg:justify-end'>
            <div className='flex flex-wrap gap-3'>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-4 py-1.5 lg:px-6 lg:py-2 text-xs md:text-sm font-bold transition-all duration-300'>my sql</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-4 py-1.5 lg:px-6 lg:py-2 text-xs md:text-sm font-bold transition-all duration-300'>momgo db</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-4 py-1.5 lg:px-6 lg:py-2 text-xs md:text-sm font-bold transition-all duration-300'>prostate sql</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-4 py-1.5 lg:px-6 lg:py-2 text-xs md:text-sm font-bold transition-all duration-300'>no sql</button>
            </div>
          </div>
        </div>

        {/* --- TESTING SECTION --- */}
        <div className='group bg-[#1A1A1A] hover:bg-[#d4ff33] active:bg-[#d4ff33] flex flex-col lg:flex-row justify-between items-start lg:items-center transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-2xl cursor-pointer p-6 lg:p-10 border-b-2 border-dashed border-amber-50'>
          <div className='w-full lg:w-2/3'>
            <div className='flex items-baseline gap-4'>
              <span className='font-sans font-black tracking-tighter text-3xl md:text-5xl text-gray-400 group-hover:text-black transition-colors duration-300'>04</span>
              <span className='font-sans font-black tracking-tighter text-4xl md:text-6xl xl:text-8xl text-amber-50 group-hover:text-black transition-colors duration-300'>TESTING</span>
            </div>
            <p className='text-amber-50 group-hover:text-black font-mono text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-left max-w-4xl mt-4 lg:ml-16 transition-colors duration-300'>
              "Ensuring seamless API performance and code reliability through rigorous validation and endpoint testing using Postman, JUnit, and Swagger."
            </p>
          </div>
          <div className='w-full lg:w-1/3 mt-6 lg:mt-0 flex lg:justify-end'>
            <div className='flex flex-wrap gap-3'>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-4 py-1.5 lg:px-6 lg:py-2 text-xs md:text-sm font-bold transition-all duration-300'>Postman</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-4 py-1.5 lg:px-6 lg:py-2 text-xs md:text-sm font-bold transition-all duration-300'>JUnit</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-4 py-1.5 lg:px-6 lg:py-2 text-xs md:text-sm font-bold transition-all duration-300'>Swagger</button>
              <button className='whitespace-nowrap border-2 border-amber-50 bg-transparent text-amber-50 group-hover:border-black group-hover:text-black hover:!bg-black hover:!text-[#d4ff33] rounded-full px-4 py-1.5 lg:px-6 lg:py-2 text-xs md:text-sm font-bold transition-all duration-300'>Jest</button>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  )
}