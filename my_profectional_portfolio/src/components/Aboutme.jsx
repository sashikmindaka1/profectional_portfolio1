import React from 'react';
import myimg22 from '../assests/myimg22.jpg';

export default function Aboutme() {
  return (
    // Main section container with a dark background and responsive padding
    <section className="bg-[#050505]/96 text-white py-20 px-6 lg:px-24">
      
      {/* Max-width wrapper to keep content centered on large screens. 
          Grid is used to split the layout into two columns on desktops. */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
        
        {/* Left Column: Section Title and Contact Button */}
        <div className="flex flex-col items-start space-y-8">
          <h2 className="text-xl lg:text-2xl font-medium text-gray-300 tracking-wide">
            About Me
          </h2>
          
          {/* Interactive 'Get in touch' button with glassmorphism hover effects */}
          <button className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 rounded-full transition-all duration-300 cursor-pointer">
            
            {/* Profile Image Container - Replace 'src' with your actual image URL */}
            <div className="w-10 h-10 rounded-full bg-gray-500 overflow-hidden">
              <img 
                src= {myimg22} 
                alt="Profile" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            {/* Email Contact Info */}
            <a href="/#home">
            <div className="text-left pr-4">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5">Get in touch</p>
              <p className="text-sm font-medium text-gray-100">hello@sashik.com</p>
            </div>
            </a>
          </button>
        </div>

        {/* Right Column: Introduction and Bio */}
        <div className="flex flex-col space-y-6 lg:mt-0">
          
          {/* Main Heading with a gradient text effect applied to the name */}
          <h1 className="text-4xl lg:text-6xl font-bold uppercase tracking-tight">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-blue-100">Sashik Mindaka.</span>
          </h1>
          
          {/* Bio Paragraph */}
          <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-3xl font-light">
            I am a passionate Full-Stack & Mobile App Developer currently pursuing my degree. I specialize in building seamless, high-performance web and mobile applications from the ground up. Whether it's crafting intuitive user interfaces or engineering robust backend systems, I focus on turning complex ideas into modern, scalable digital solutions.
          </p>
        </div>

      </div>
    </section>
  );
}