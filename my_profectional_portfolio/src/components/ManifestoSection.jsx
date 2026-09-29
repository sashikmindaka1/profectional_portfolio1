import React from 'react';

export default function ServicesSection() {
  
  const services = [
    {
      id: 1,
      title: "System Architecture & Strategy",
      desc: "Strategic orchestration of comprehensive digital ecosystems. Defining scalable architectural blueprints that unite frontend, backend, and data tiers, ensuring cohesive system operation.",
      tags: ["ECOSYSTEM DESIGN", "ARCHITECTURAL PLANNING", "ORCHESTRATION", "DISTRIBUTED SYSTEMS"],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Full-Stack Platform Development",
      desc: "Full-lifecycle engineering of complex web and mobile platforms, from creating scalable React frontends to robust Java Spring Boot and Node.js APIs for complex data management.",
      tags: ["REACT.JS", "SPRING BOOT", "NODE.JS", "MYSQL"],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Integrated Mobile & Web Solutions",
      desc: "Unified, device-agnostic cross-platform experiences. Focus on consistent performance, usability, and smooth user flow across mobile applications and web interfaces.",
      tags: ["CROSS-PLATFORM", "UX/UI FLOW", "MOBILE-FIRST", "PWA"],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "DevOps & Scalability Auditing",
      desc: "Rigorous engineering to ensure total system reliability and resilience. Deployment strategies optimized for performance, scalable growth, and automated delivery pipelines.",
      tags: ["SYSTEM AUDITING", "DEPLOYMENT", "CI/CD", "CLOUD INFRASTRUCTURE"],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#050505]/96 text-[#C0C0C0] py-24 px-6 lg:px-12 font-sans selection:bg-[#C0C0C0] selection:text-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Sticky Header Section */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <div className="inline-block border-b border-[#C0C0C0]/30 pb-2 mb-8">
            <span className="text-2xl lg:text-3xl text-amber-50/70 text-xs font-mono font-semibold tracking-widest uppercase">
              WHAT I DO
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] uppercase tracking-tight">
            Advanced <br /> Digital <br /> Engineering.
          </h2>
          <p className="mt-6 text-[#C0C0C0]/60 text-sm leading-relaxed max-w-sm">
            Architecting entire resilient systems from a single, focused mind. No communication silos—just complete, end-to-end digital experiences.
          </p>
        </div>

        {/* : Services List*/}
        <div className="lg:w-2/3 flex flex-col">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              
             // add line
              className={`group flex flex-col sm:flex-row gap-6 lg:gap-10 py-12 transition-all duration-500 ${
                index !== 0 ? 'border-t border-[#C0C0C0]/10 hover:border-[#C0C0C0]/40' : 'pt-0'
              }`}
            >
              
              {/* Icon Box */}
              <div className="sm:w-16 shrink-0 pt-1">
                <div className="w-14 h-14 bg-[#0A0A0A] border border-[#C0C0C0]/20 flex items-center justify-center text-[#C0C0C0] group-hover:bg-[#C0C0C0] group-hover:text-[#050505] transition-all duration-500 shadow-sm">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-5xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-[#C0C0C0]/70 text-sm lg:text-base leading-relaxed mb-8">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 bg-[#050505] border border-[#C0C0C0]/20 text-[10px] font-mono tracking-widest text-[#C0C0C0]/80 uppercase hover:bg-[#C0C0C0]/10 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}