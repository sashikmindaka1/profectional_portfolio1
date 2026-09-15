import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#1A1A1A]/90 backdrop-blur-md border-b  w-full border-[1A1A1A] font-sans transition-all duration-300">
      
      {/* max-w-screen-2xl centers the container on ultra-wide screens, while padding utilities push items to the edges */}
      <nav className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto w-full">
        
        {/* Left Side: Logo */}
        <div className="cursor-pointer transition-transform duration-300 hover:scale-105 w-auto">
          <h1 className='text-3xl font-["Black_Ops_One"] font-bold tracking-wider text-[#0B0C0A]'>
            sashik.
          </h1>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-10 lg:gap-20 font-medium text-[#f7ecec] tracking-wide text-lg w-auto">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="relative group transition-colors duration-300 hover:text-black"
            >
              {item}
              {/* Animated underline effect on hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: Contact Button */}
        <div className="w-auto flex justify-end">
          <button className="bg-[#d4ff33] border-2 border-b-black text-black font-semibold rounded-full px-6 py-2.5 hover:bg-black hover:text-[#d4ff33] hover:border-[#d4ff33] transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
            CONTACT ME
          </button>
        </div>

      </nav>
      
    </header>
  );
}