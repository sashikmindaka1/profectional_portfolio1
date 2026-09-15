import React from 'react';
import myimg1 from '../assests/myimg21.jpg';

export default function HeroSection() {
  return (
    /* 
      Main wrapper for the Hero Section. 
      - 'relative' is required because child elements use 'absolute' positioning.
      - 'overflow-hidden' prevents the giant background text from creating scrollbars.
      - 'min-h-[90dvh]' ensures the section takes up at least 90% of the screen height safely on mobile.
    */
    <section className="relative w-full min-h-[90dvh] bg-[#1A1A1A] flex flex-col justify-between p-6 lg:p-12 overflow-hidden">
      
      {/* 
        Top Header Section: Displays developer title and location.
        - Uses flexbox to space items apart.
        - 'z-10' keeps it above the background text.
      */}
      <div className="w-full flex justify-between items-center pb-4 border-b border-dashed border-gray-400 text-xs lg:text-sm font-semibold text-gray-500 uppercase tracking-widest relative z-10 mt-12 lg:mt-0">
        <span>SASHIK.DEV — FULLSTACK</span>
        <span>NSBM — SWE</span>
      </div>

      {/* 
        Giant Background Text (SASHIK MINDAKA)
        - Positioned absolutely in the vertical center of the screen.
        - 'pointer-events-none' ensures users can't accidentally highlight or click this text.
        - 'z-0' places it at the very bottom layer.
      */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex flex-col leading-[0.85] tracking-tighter uppercase font-black z-0 pointer-events-none select-none px-4 lg:px-8 text-amber-50">
        <span className="text-[16vw] lg:text-[12vw] text-left">SASHIK</span>
        {/* Added custom right padding [400px] to prevent the text from hiding behind the image on large screens */}
        <span className="text-[16vw] lg:text-[12vw] text-right lg:pr-[400px]">MINDAKA</span>
      </div>

      {/* 
        Floating Center Badge (DEV)
        - Perfectly centered in the middle of the screen using absolute positioning and translation.
        - 'z-30' ensures it floats above all other elements.
        - Includes hover animations for a better user experience.
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-24 h-24 lg:w-36 lg:h-36 rounded-full border-[6px] lg:border-[10px] border-[#d4ff33] bg-[#1a1a1a] flex items-center justify-center text-[#d4ff33] font-bold text-xl lg:text-3xl tracking-widest shadow-2xl transition-transform duration-500 hover:scale-110 cursor-pointer">
        DEV
      </div>

      {/* 
        Bottom Content Container: Holds the Call-to-Action buttons and the Portrait Image.
        - Stacks vertically on small screens and horizontally on large screens (lg).
        - 'mt-auto' pushes this container to the very bottom of the flex layout.
        - 'z-20' keeps it above the background text.
      */}
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-end relative z-20 mt-auto pt-40 lg:pt-20">
        
        {/* Action Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4 lg:mb-0 w-full lg:w-auto">
          <button className="bg-[#d4ff33] text-black border border-amber-50 rounded-full px-6 py-3 lg:px-8 lg:py-4 font-bold text-sm hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
            DISCUSS A PROJECT <span>&rarr;</span>
          </button>
          <button className="bg-transparent text-amber-50 border border-amber-50 rounded-full px-6 py-3 lg:px-8 lg:py-4 font-bold text-sm hover:bg-black hover:text-white transition-colors duration-300">
            BEFORE/AFTER STATS
          </button>
        </div>

        {/* Right Side Image Section */}
        <div className="relative w-64 lg:w-[400px] mb-8 lg:mb-0 group mx-auto lg:mx-0">
          <img 
            src={myimg1} 
            alt="Sashik Mindaka" 
            className="w-full h-[350px] lg:h-[500px] object-cover rounded-[2rem] border border-black shadow-lg"
          />
          {/* Overlay Label inside the image bottom */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur-sm rounded-full py-2.5 px-4 text-[10px] lg:text-xs font-mono font-semibold border border-black text-center text-gray-800">
            // FULLSTACK DEVELOPER
          </div>
        </div>

      </div>
      
    </section>
  );
}