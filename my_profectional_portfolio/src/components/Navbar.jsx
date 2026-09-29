import React, { useState } from 'react';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  // Menu eka toggle karana function eka
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // These are the IDs corresponding to the sections defined in App.jsx
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'manifesto' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certification', id: 'certification' },
    { name: 'Education', id: 'education' },
    { name: 'Footer', id: 'Footer' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black backdrop-blur-md border-b w-full border-amber-50/20 font-sans transition-all duration-300">
      
      <nav className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto w-full relative">
        
        {/* Left Side: Logo */}
        <div className="cursor-pointer transition-transform duration-300 hover:scale-105 w-auto">
          {/* Clicking the logo will also navigate back to the Home section */}
          <a href="#home" className='text-3xl font-["Black_Ops_One"] font-bold tracking-wider text-[#fefaee]'>
            sashik.
          </a>
        </div>

        {/* Center: Navigation Links (Desktop Only - 'hidden md:flex') */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-10 font-medium text-[#f7ecec] tracking-wide text-lg w-auto">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={`#${item.id}`} // Passing the relevant section ID to the href attribute
              className="relative group transition-colors duration-300 hover:text-[#D4AF37]"
            >
              {item.name}
              {/* Animated underline effect on hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Side: Contact Button (Desktop Only - 'hidden md:block') */}
        <a href="#Footer" className="hidden md:block">
          <div className="w-auto flex justify-end">
            <button className="bg-amber-50 border-2 border-b-black text-[#0A1931] font-semibold px-6 py-2.5 hover:bg-[#0A1931] hover:text-[#D4AF37] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transform hover:-translate-y-0.5">
              CONTACT ME
            </button>
          </div>
        </a>

        {/* Mobile Menu Toggle Button (Mobile Only - 'md:hidden block') */}
        <button 
          className="md:hidden block text-[#D4AF37] focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            // Close (X) Icon
            <svg className="w-8 h-8 transition-transform duration-300 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger (3 Lines) Icon
            <svg className="w-8 h-8 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </nav>

      {/* Mobile Dropdown Menu */}
      
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0A1931] border-t-2 border-[#D4AF37] flex flex-col shadow-2xl pb-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={toggleMenu} 
              className="py-4 px-6 text-[#f7ecec] font-bold border-b border-[#D4AF37]/20 hover:text-[#D4AF37] transition-colors"
            >
              {item.name}
            </a>
          ))}
          
          {/* Mobile Menu Contact Button */}
          <div className="px-6 pt-6">
            <a href="#Footer" onClick={toggleMenu}>
              <button className="w-full bg-[#D4AF37] border-2 border-[#D4AF37] text-[#0A1931] font-semibold rounded-full px-6 py-3 hover:bg-[#0A1931] hover:text-[#D4AF37] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                CONTACT ME
              </button>
            </a>
          </div>
        </div>
      )}
      
    </header>
  );
}