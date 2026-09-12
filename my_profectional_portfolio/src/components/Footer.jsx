import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0C0A] border-t-2 border-dashed border-gray-800 pt-16 pb-8 px-6 md:px-12 lg:px-20 text-gray-300">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* 1. Brand & Info Section (ලොකු ඉඩක් ගන්නවා) */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="inline-block">
            <span className="font-sans font-black tracking-tighter text-4xl sm:text-5xl text-black bg-[#d4ff33] px-2 uppercase">
              Sashik Mindaka.
            </span>
          </div>
          <p className="font-mono text-sm leading-relaxed text-gray-400 max-w-sm">
            Software Engineering Undergraduate at NSBM Green University. Crafting robust web applications with React, Java, and Spring Boot. Building the future, one line of code at a time.
          </p>
          <div className="flex gap-3 font-mono text-xs text-amber-500/80 mt-2">
            <span>[ REACT ]</span>
            <span>[ SPRING BOOT ]</span>
            <span>[ JAVA ]</span>
          </div>
        </div>

        {/* 2. Quick Links Section */}
        <div className="md:col-span-3 flex flex-col gap-4 font-mono">
          <h4 className="text-amber-50 font-bold text-lg mb-2 uppercase tracking-widest border-b border-gray-800 pb-2 inline-block">
            Directory
          </h4>
          <a href="#about" className="hover:text-[#d4ff33] transition-colors w-fit">{'// About Me'}</a>
          <a href="#projects" className="hover:text-[#d4ff33] transition-colors w-fit">{'// Projects'}</a>
          <a href="#education" className="hover:text-[#d4ff33] transition-colors w-fit">{'// Education'}</a>
          <a href="#contact" className="hover:text-[#d4ff33] transition-colors w-fit">{'// Contact'}</a>
        </div>

        {/* 3. Social Media Links Section */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="text-amber-50 font-mono font-bold text-lg mb-2 uppercase tracking-widest border-b border-gray-800 pb-2 inline-block">
            Connect
          </h4>
          <div className="grid grid-cols-2 gap-3">
            
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-700 bg-[#111315] hover:bg-white hover:text-black hover:border-white transition-all py-3 rounded-lg font-mono font-bold text-sm"
            >
              {/* <FaGithub size={18} /> */}
              GITHUB
            </a>

            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-700 bg-[#111315] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all py-3 rounded-lg font-mono font-bold text-sm"
            >
              {/* <FaLinkedin size={18} /> */}
              LINKEDIN
            </a>

            <a 
              href="mailto:youremail@example.com" 
              className="flex items-center justify-center gap-2 border border-gray-700 bg-[#111315] hover:bg-[#d4ff33] hover:text-black hover:border-[#d4ff33] transition-all py-3 rounded-lg font-mono font-bold text-sm col-span-2"
            >
              {/* <FaEnvelope size={18} /> */}
              SAY HELLO {'->'}
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Bar: Copyright & Status */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-800 pt-8 font-mono text-xs text-gray-500">
        <p>© {currentYear} Sashik Mindaka. All rights reserved.</p>
        
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4ff33] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4ff33]"></span>
          </span>
          <span className="uppercase tracking-widest text-[#d4ff33]">Available for Internships (2027)</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;