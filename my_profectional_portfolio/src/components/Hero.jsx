import React from 'react';
import myimg1 from '../assests/myimg21.jpg';
import githubIcon from '../assests/g2234.png'; 
import linkedin from '../assests/linkedin.png'; 
import q112 from '../assests/q112.png'; 

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90dvh] bg-[#050505] flex flex-col justify-between p-6 lg:p-12 overflow-hidden">
      
      {/* Top Header Section */}
      <div className="w-full flex justify-between items-center pb-4 border-[#C0C0C0]/40 text-xs lg:text-sm font-semibold text-[#C0C0C0] uppercase tracking-widest relative z-10 mt-12 lg:mt-0">
        <span>SASHIK.DEV — FULLSTACK</span>
        <span>PROBLEM SOLVER</span>
      </div>

      {/* Giant Background Text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex flex-col leading-[0.85] tracking-tighter uppercase font-black z-0 pointer-events-none select-none px-4 lg:px-8">
        <span className="text-amber-50 text-[16vw] lg:text-[12vw] text-left">
          SASHIK
        </span>
        {/* Syntax error eka hadala glow color eka damma */}
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-500 [filter:drop-shadow(0_0_20px_rgba())] text-[16vw] lg:text-[12vw] text-right lg:pr-[420px]">
          MINDAKA
        </span>
      </div>

      {/* Floating Center Badge (DEV) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-24 h-24 lg:w-36 lg:h-36 rounded-full border-[6px] lg:border-[10px] border-[#C0C0C0] bg-[#000000] flex items-center justify-center text-[#C0C0C0] font-bold text-xl lg:text-3xl tracking-widest transition-transform duration-500 hover:scale-110 cursor-pointer">
        DEV
      </div>

      {/* Bottom Content Container */}
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-end relative z-20 mt-auto pt-40 lg:pt-20 gap-8 lg:gap-0">
        
        {/* Left Side: Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto gap-12">
          <a href="#projects">
            <button className="bg-[#050505] text-[#C0C0C0] border border-[#C0C0C0] px-6 py-3 lg:px-8 lg:py-4 font-bold text-sm hover:bg-[#C0C0C0] hover:text-[#000000] transition-all duration-300 flex items-center justify-center gap-4 rounded-3xl">
              DISCUSS A PROJECT <span>&rarr;</span>
            </button>
          </a>
          <a href="assests/my-cv.pdf" download="Sashik_Mindaka_CV.pdf">
            <button className="bg-transparent text-[#C0C0C0] border border-[#C0C0C0] px-6 py-3 lg:px-8 lg:py-4 font-bold text-sm hover:bg-[#C0C0C0]/10 transition-all duration-300 rounded-3xl">
              Download My Resume
            </button>
          </a>
        </div>

        {/* Right Side: Image and Individual Social Icons */}
        <div className="relative w-48 lg:w-[340px] group mx-auto lg:mx-0">
          
          {/* Image & Label Wrapper */}
          <div className="relative w-full">
            <img 
              src={myimg1} 
              alt="Sashik Mindaka" 
              className="w-full h-[260px] lg:h-[390px] object-cover rounded-[2rem] border-2 border-[#C0C0C0]"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-[#050505]/90 backdrop-blur-md py-2.5 px-4 text-[10px] lg:text-xs font-mono font-semibold border border-[#C0C0C0] text-center text-[#C0C0C0]">
              // FULLSTACK DEVELOPER
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 lg:gap-10 mt-7">
            
            {/* 1. GitHub Icon Container */}
            <a 
              href="https://github.com/sashikmindaka1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border border-[#C0C0C0]/50 hover:border-[#C0C0C0] hover:bg-[#C0C0C0]/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <img src={githubIcon} alt="GitHub" className="w-full h-full object-cover" />
            </a>

            {/* 2. LinkedIn Icon Container */}
            <a 
              href="https://www.linkedin.com/in/sashik-mindaka-77593a364" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border border-[#C0C0C0]/50 hover:border-[#C0C0C0] hover:bg-[#C0C0C0]/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <img src={linkedin} alt="LinkedIn" className="w-full h-full object-cover" />
            </a>

            {/* 3. Portfolio Icon Container */}
            <a 
              href="https://www.sashikmindaka.dev/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full border border-[#C0C0C0]/50 hover:border-[#C0C0C0] hover:bg-[#C0C0C0]/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <img src={q112} alt="Portfolio" className="w-full h-full object-cover" />
            </a>

          </div>

        </div>

      </div>
      
    </section>
  );
}