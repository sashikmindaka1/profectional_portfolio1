import React, { useState } from 'react';
// Make sure these folder names are correct in your actual project structure
import imgt1 from '../assests/Untitled design (5).jpg'; 
import imgGit from '../assests/images.png'; // Fixed 1: Added missing image import

// 1. Dot-style ChooseOption Component
const ChooseOption = ({ activeTab, setActiveTab }) => {
  const categories = ['ALL', 'BRANDING', 'SEO', 'UI DESIGN', 'WEB APPLICATION', 'WEBSITE'];

  return (
    <div className='flex flex-wrap items-center justify-center gap-6 mt-6'>
      {categories.map((category) => (
        <button 
          key={category}
          onClick={() => setActiveTab(category)}
          className='flex items-center gap-2.5 group cursor-pointer bg-transparent border-none outline-none'
        >
          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
            activeTab === category ? 'bg-white scale-125' : 'bg-white/30 group-hover:bg-white/60'
          }`} />
          
          <span className={`text-xs md:text-sm font-mono tracking-widest uppercase transition-colors duration-300 ${
            activeTab === category ? 'text-white font-bold' : 'text-white/50 group-hover:text-white'
          }`}>
            {category}
          </span>
        </button>
      ))}
    </div>
  );
};

// 2. Main Projects Component 
export default function Projects() {
  const [activeTab, setActiveTab] = useState('ALL');

  // Fixed 2: Changed duplicate IDs to unique IDs
  // Fixed 3: Added missing 'projectName' and 'githubLink' properties
  const Projectlist = [
    { id: 1, image: imgt1, category: 'WEBSITE', projectName: 'Website Project 1', githubLink: 'https://github.com' },
    { id: 2, image: imgt1, category: 'BRANDING', projectName: 'Branding Project 1', githubLink: 'https://github.com' },
    { id: 3, image: imgt1, category: 'WEBSITE', projectName: 'Website Project 2', githubLink: 'https://github.com' },
    { id: 4, image: imgt1, category: 'BRANDING', projectName: 'Branding Project 2', githubLink: 'https://github.com' },
    { id: 5, image: imgt1, category: 'UI DESIGN', projectName: 'UI Design Project', githubLink: 'https://github.com' }
  ];

  const filteredProjects = activeTab === 'ALL' 
    ? Projectlist 
    : Projectlist.filter(p => p.category === activeTab);

  return (
    <div className='bg-[#050505] min-h-screen pb-24 text-white'>
      
      <div className='max-w-[95rem] mx-auto px-4 lg:px-9 pt-16'>
        
        {/* Header Section */}
        <div className='text-center'>
          <p className='text-white/60 text-2xl lg:text-5xl font-mono tracking-widest uppercase mb-2'>
            Works
          </p>
          <h1 className='text-4xl lg:text-8xl text-white font-black tracking-tight uppercase mb-6'>
            Featured Projects
          </h1>
          <ChooseOption activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 mt-12'>
          
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              // Fixed 4: Removed invalid inline comments (//) inside the JSX tag
              className="rounded-[2rem] overflow-hidden group relative h-[350px] md:h-[480px] shadow-2xl cursor-pointer"
            >
              
              <img 
                src={project.image}
                alt="Project Mockup" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100 hover:blur-xs" 
              />

               <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20">
                <p className="text-white/70 text-xs font-mono tracking-widest uppercase mb-1">
                  {project.category}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {project.projectName}
                </h2>
              </div>

              {/* 4. Github Button (Bottom Left) */}
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  // Fixed 4: Removed invalid inline comments (//) inside the JSX tag
                  className="w-12 h-12 bg-black rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white hover:border-white transition-all group/btn"
                >
                  <img src={imgGit} alt="github" className="w-5 h-5 invert group-hover/btn:invert-0 transition-all" />
                </a>
            </div>
           </div>
          ))}

        </div>

      </div>
    </div>
  );
}