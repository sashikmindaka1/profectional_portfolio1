import React from 'react';
// Import all your images here

import f1 from '../assests/f1.png';
import f2 from '../assests/f2.png';
import f3 from '../assests/f3.png';
import f4 from '../assests/f4.png';

import b1 from '../assests/b1.png';
import b2 from '../assests/b2.png';
import b3 from '../assests/b3.png';

import d1 from '../assests/d1.png';
import d2 from '../assests/d2.png';
import d3 from '../assests/d3.png';

import t1 from '../assests/t1.png';

import v1 from '../assests/v1.png';
import v2 from '../assests/images.png';

import a1 from '../assests/a1.png';
import a4 from '../assests/a4.png';
import a3 from '../assests/a3.png';

import e1 from '../assests/e1.png';
import e2 from '../assests/e2.png';
import e3 from '../assests/e3.png';


// Instead of copying divs, you can just add new categories and tools here.
const toolsData = [
  {
    id: 1,
    category: "Frontend",
    icons: [f1, f2, f3,f4]
  },
  {
    id: 2,
    category: "Backend",
    icons: [b1, b2, b3] 
  },
  {
    id: 3,
    category: "Database",
    icons: [d1, d2, d3] 
  },
  {
    id: 4,
    category: "testing",
    icons: [t1] 
  },
    {
    id: 5,
    category: "version control",
    icons: [v1, v2] 
  },
  {
    id: 6,
    category: "ai tools",
    icons: [a1, a4, a3] 
  },
  {
    id: 7,
    category: "text editors",
    icons: [e1, e2, e3] 
  },
];

export default function Keytools() {
  return (
    // Main container with dark background and responsive padding
    <section className="bg-[#0a0a0a] min-h-screen py-20 px-6 lg:px-24">
      
      {/* Small top heading */}
      <h3 className="text-amber-50 text-lg lg:text-xl font-medium tracking-widest uppercase mb-4 text-center lg:text-left">
        Tools
      </h3>
      
      {/* Main Title */}
      <h1 className="text-white text-3xl lg:text-6xl font-bold mb-16 text-center lg:text-center">
        THE KEY TOOLS AND LANGUAGES I USE
      </h1>

      {/* Grid Container: Responsive columns (1 on mobile, 2 on tablet, 4 on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        

        {toolsData.map((section) => (
          
          // Card design with a subtle border, dark background, and hover effect
          <div 
            key={section.id} 
            className="border border-white/10 bg-white/5 p-8 rounded-2xl hover:-translate-y-2 hover:border-b-gray-700 transition-all duration-300"
          >
            {/* Category Name */}
            <h2 className="text-xl font-semibold text-white mb-6 capitalize">
              {section.category}
            </h2>
            
            {/* Flex container for images */}
            <div className="flex flex-wrap gap-4">
              
              {section.icons.map((iconUrl, index) => (
                <div 
                  key={index} 
                  className="w-12 h-13  p-2 rounded-lg flex items-center justify-center hover:scale-150 transition-transform duration-200 cursor-pointer"
                >
                  <img 
                    className="w-full h-full object-contain" 
                    src={iconUrl} 
                    alt={`${section.category} tool`} 
                  />
                </div>
              ))}
              
            </div>
          </div>
          
        ))}

      </div>
    </section>
  );
}