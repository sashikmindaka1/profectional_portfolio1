import React from 'react';
import Travelmaniap from '../assests/travelmaniap.jpeg';

// Reusable Project Card Component
const ProjectCard = ({ id, title, category, type, description, techStack, githubLink, demoLink }) => {
  return (
    <div className="text-amber-50 border border-dashed border-gray-800 bg-[#0B0C0A] p-4 sm:p-6 md:p-8 rounded-2xl hover:border-[#d4ff33]/50 hover:bg-[#12151a] transition-all duration-300">
      {/* Responsive Grid: 1 Column on Mobile & Laptop, Split Layout on Large Displays */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_4%_1fr] gap-6 xl:gap-0">
        
        {/* FIRST COLUMN: Project Title & Image */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-sans font-black tracking-tighter text-4xl sm:text-5xl lg:text-6xl text-amber-50">
              {id}
            </p>
            <p className="font-sans font-black tracking-tighter text-3xl sm:text-4xl lg:text-5xl text-amber-50 mt-2">
              {title}
            </p>
          </div>

          <img
            className="mt-6 w-full rounded-xl object-cover shadow-lg border border-gray-900"
            src={Travelmaniap}
            alt={`${title} showcase`}
          />
        </div>

        {/* SECOND COLUMN: Visual Gap Spacer (Hidden on Mobile/Tablet) */}
        <div className="hidden xl:block" />

        {/* THIRD COLUMN: Project Info & Actions */}
        <div className="flex flex-col justify-between mt-4 xl:mt-0">
          <div>
            <button className="text-black bg-[#d4ff33] font-mono font-bold text-xs rounded-xl py-1 px-3">
              [UNDEPLOYED]
            </button>

            <p className="font-mono font-bold tracking-tight text-lg sm:text-xl text-amber-50 mt-4">
              {category}
            </p>
            <p className="font-mono font-bold tracking-tight text-base sm:text-lg text-amber-100/70 mt-1">
              {type} /
            </p>

            <p className="font-mono text-sm sm:text-base text-gray-300 mt-6 leading-relaxed">
              {description}
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mt-6">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-[#d4ff33] bg-[#0B0C0A] border border-[#d4ff33]/40 rounded-xl py-1.5 px-3 text-xs font-mono whitespace-nowrap hover:text-black hover:bg-[#d4ff33] transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8">
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="text-[#FF4D4D] bg-black border border-[#FF4D4D] font-mono font-bold text-sm rounded-xl hover:text-black hover:bg-[#FF4D4D] py-2 px-3 text-center transition-all"
            >
              View in Github
            </a>

            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="text-[#4dff00] bg-black border border-[#4dff00] font-mono font-bold text-sm rounded-xl hover:text-black hover:bg-[#4dff00] py-2 px-3 text-center transition-all"
            >
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default function Featured() {
  // Array containing all project details for clean data management
  const projectsData = [
    {
      id: "01",
      title: "TRAVELMANIA",
      category: "Travel Management Platform",
      type: "Fullstack WEB Platform",
      description: "A full-stack solution for fragmented travel experiences.",
      techStack: ["React", "Spring Boot", "PostgreSQL", "REST API"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      id: "02",
      title: "TRAVELMANIA",
      category: "Travel Management Platform",
      type: "Fullstack WEB Platform",
      description: "A full-stack solution for fragmented travel experiences.",
      techStack: ["React", "Spring Boot", "PostgreSQL", "REST API"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      id: "03",
      title: "PROJECT THREE",
      category: "E-Commerce Solution",
      type: "Fullstack Web App",
      description: "Scalable web platform with real-time updates and seamless checkout.",
      techStack: ["React", "Tailwind CSS", "Node.js", "MySQL"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      id: "04",
      title: "PROJECT FOUR",
      category: "Analytics Dashboard",
      type: "Frontend Platform",
      description: "High-performance dashboard rendering metrics and real-time visualization.",
      techStack: ["React", "Tailwind CSS", "Chart.js", "REST API"],
      githubLink: "#",
      demoLink: "#"
    }
    
  ];

  return (
    <section className="bg-[#0B0C0A] py-16 px-4 sm:px-8 md:px-12">
      {/* Header Section */}
      <div className="flex flex-wrap items-baseline gap-4 mb-8">
        <span className="font-sans font-black tracking-tighter text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-black bg-[#d4ff33] px-2">
          FEATURED.
        </span>
        <span className="font-sans font-black tracking-tighter text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-amber-50">
          (PROJECT SHOWCASE)
        </span>
      </div>

      <h1 className="text-amber-200 font-mono mb-8 text-sm sm:text-base">
        // CREATIVE BUILD SHOWCASE
      </h1>

      {/* Main Grid Layout for Cards: 1 Column on Small/Medium, 2 Columns on XL Screens */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}