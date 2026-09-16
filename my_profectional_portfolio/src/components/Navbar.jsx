import React from 'react';

export default function Navbar() {
  
  // These are the IDs corresponding to the sections defined in App.jsx
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'manifesto' },
    { name: 'Mainfesto', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certification', id: 'certification' },
    { name: 'Education', id: 'education' },
    { name: 'Footer', id: 'Footer' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1A1A1A]/90 backdrop-blur-md border-b w-full border-[#1A1A1A] font-sans transition-all duration-300">
      
      <nav className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto w-full">
        
        {/* Left Side: Logo */}
        <div className="cursor-pointer transition-transform duration-300 hover:scale-105 w-auto">
          {/* Clicking the logo will also navigate back to the Home section */}
          <a href="#home" className='text-3xl font-["Black_Ops_One"] font-bold tracking-wider text-[#d4ff33]'>
            sashik.
          </a>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-10 font-medium text-[#f7ecec] tracking-wide text-lg w-auto">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={`#${item.id}`} // Passing the relevant section ID to the href attribute
              className="relative group transition-colors duration-300 hover:text-[#d4ff33]"
            >
              {item.name}
              {/* Animated underline effect on hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4ff33] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <a href= "#Footer">

        {/* Right Side: Contact Button */}
        <div  className="w-auto flex justify-end">
          <button className="bg-[#d4ff33] border-2 border-b-black text-black font-semibold rounded-full px-6 py-2.5 hover:bg-black hover:text-[#d4ff33] hover:border-[#d4ff33] transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5">
            CONTACT ME
          </button>

          
        </div>
        </a>

      </nav>
      
    </header>
  );
}