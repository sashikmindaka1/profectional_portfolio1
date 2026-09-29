import React from 'react';
import myimg1 from '../assests/myimg21.jpg';

export default function HeroSection() {
  return (
    /* 
      Main wrapper for the Hero Section. 
      - Background is Sleek Black (#050505)
    */
    <section className="relative w-full min-h-[90dvh] bg-[#050505] flex flex-col justify-between p-6 lg:p-12 overflow-hidden">
      
      {/* Top Header Section */}
      <div className="w-full flex justify-between items-center pb-4 border-b border-dashed border-[#C0C0C0]/40 text-xs lg:text-sm font-semibold text-[#C0C0C0] uppercase tracking-widest relative z-10 mt-12 lg:mt-0">
        <span>SASHIK.DEV — FULLSTACK</span>
        <span>PROBLEM SOLVER</span>
      </div>

      {/* 
        Giant Background Text 
        - Solid Silver Color (#C0C0C0)
        - No glow, no fading, 100% visible
      */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex flex-col leading-[0.85] tracking-tighter uppercase font-black z-0 pointer-events-none select-none px-4 lg:px-8">
        <span className="text-[#C0C0C0] text-[16vw] lg:text-[12vw] text-left">
          SASHIK
        </span>
        <span className="text-[#C0C0C0] text-[16vw] lg:text-[12vw] text-right lg:pr-[420px]">
          MINDAKA
        </span>
      </div>

      {/* 
        Floating Center Badge (DEV)
        - Clean solid silver border and text, no glow
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-24 h-24 lg:w-36 lg:h-36 rounded-full border-[6px] lg:border-[10px] border-[#C0C0C0] bg-[#000000] flex items-center justify-center text-[#C0C0C0] font-bold text-xl lg:text-3xl tracking-widest transition-transform duration-500 hover:scale-110 cursor-pointer">
        DEV
      </div>

      {/* Bottom Content Container */}
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-end relative z-20 mt-auto pt-40 lg:pt-20">
        
        {/* Action Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4 lg:mb-0 w-full lg:w-auto">
          <a href="projects#projects">
            {/* Button 1: Solid Black and Silver, no glow */}
            <button className="bg-[#050505] text-[#C0C0C0] border border-[#C0C0C0] rounded-full px-6 py-3 lg:px-8 lg:py-4 font-bold text-sm hover:bg-[#C0C0C0] hover:text-[#000000] transition-all duration-300 flex items-center justify-center gap-2">
              DISCUSS A PROJECT <span>&rarr;</span>
            </button>
          </a>
          <a href="assests/my-cv.pdf" download="Sashik_Mindaka_CV.pdf">
            {/* Button 2: Transparent with silver border, no glow */}
            <button className="bg-transparent text-[#C0C0C0] border border-[#C0C0C0] rounded-full px-6 py-3 lg:px-8 lg:py-4 font-bold text-sm hover:bg-[#C0C0C0]/10 transition-all duration-300">
              Download My Resume
            </button>
          </a>
        </div>

        {/* Right Side Image Section */}
       <div className="relative w-48 lg:w-[340px] mb-8 lg:mb-0 group mx-auto lg:mx-0 -translate-y-8 lg:-translate-y-16">
      <img 
       src={myimg1} 
       alt="Sashik Mindaka" 
    
       className="w-full h-[260px] lg:h-[390px] object-cover rounded-[2rem] border-2 border-[#C0C0C0]"
      />
          {/* Overlay Label inside the image bottom - no glow */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-[#050505]/90 backdrop-blur-md rounded-full py-2.5 px-4 text-[10px] lg:text-xs font-mono font-semibold border border-[#C0C0C0] text-center text-[#C0C0C0]">
            // FULLSTACK DEVELOPER
          </div>
        </div>

      </div>
      
    </section>
  );
}