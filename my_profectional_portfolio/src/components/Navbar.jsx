import React from 'react'

export default function Navbar() {
  return (
    // font-sans damma clean look ekak enna
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg w-full font-sans">
      
      {/* max-w-7xl ain karala w-full damma. px-10 lg:px-24 damma eken depaththatama thallu wenawa */}
      <nav className="flex justify-between items-center py-5 w-full px-8 lg:px-24">
        
        {/* Logo Section */}
        <div className="cursor-pointer transition-transform duration-300 hover:scale-105">
          <h1 className="text-3xl font-extrabold tracking-wider text-blue-500">
            sashik<span className="text-white">.</span>
          </h1>
        </div>

        {/* Links Section: gap-8 wenuwata gap-16 damma space wadi karanna. text-lg damma loku wenda. */}
        <div className="flex gap-12 lg:gap-16 font-medium text-gray-300 tracking-wide text-lg">
          <a href="#home" className="inline-block transition-all duration-300 hover:text-blue-400 hover:scale-110 active:scale-125">
            Home
          </a>
          <a href="#about" className="inline-block transition-all duration-300 hover:text-blue-400 hover:scale-110 active:scale-125">
            About
          </a>
          <a href="#projects" className="inline-block transition-all duration-300 hover:text-blue-400 hover:scale-110 active:scale-125">
            Projects
          </a>
          <a href="#contact" className="inline-block transition-all duration-300 hover:text-blue-400 hover:scale-110 active:scale-125">
            Contact
          </a>
        </div>

      </nav>
      
    </header>
  )
}