import React from "react";
import ceteficate1 from "../assests/travelmaniap.jpeg"; 
const CertificateCard = ({
  id,
  title,
  image,
  issuedBy,
  skillBadge,
  courseStatus,
  viewLink,
  shareLink,
}) => {
  return (
    <div className="flex flex-col justify-between bg-[#111315] border border-dashed border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:border-[#d4ff33]/70 hover:bg-[#16191e] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,255,51,0.1)]">
      
      {/* Top Section: ID & Title */}
      <div>
        <p className="font-sans font-black tracking-tighter text-4xl sm:text-5xl text-gray-500 mb-2">
          {id}
        </p>
        <p className="font-sans font-black tracking-tighter text-2xl sm:text-3xl text-amber-50 uppercase leading-tight mb-6">
          {title}
        </p>
      </div>

      {/* Middle Section: Image (Certificate Preview) */}
      <div className="relative w-full aspect-[4/3] bg-black border border-gray-800 rounded-xl overflow-hidden mb-6 p-2 flex items-center justify-center">
       
        <div className="w-full h-full border-2 border-lime-500/30 rounded-lg overflow-hidden relative">
            <img 
                src={image} 
                alt={`${title} certificate`} 
                className="w-full h-full object-cover" 
            />
          
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </div>

      {/* Verified Badge */}
      <div className="flex justify-end mb-6">
        <span className="font-mono text-[10px] sm:text-xs font-bold tracking-widest text-[#d4ff33] border border-[#d4ff33] rounded-md px-2 py-1 bg-black">
          [VERIFIED CREDENTIAL]
        </span>
      </div>

      {/* Details Section */}
      <div className="font-mono text-sm sm:text-base text-gray-400 flex flex-col gap-1 mb-8 flex-grow">
        <p>Issued by {issuedBy}</p>
        <p>Skill Badge: {skillBadge}</p>
        <p className="mt-4 text-amber-50/70">{courseStatus}</p>
      </div>

      {/* Bottom Action Buttons */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-auto">
        <a
          href={viewLink}
          target="_blank"
          rel="noreferrer"
          className="text-[#FF4D4D] bg-transparent border border-[#FF4D4D] font-mono font-bold text-xs sm:text-sm rounded-xl hover:text-black hover:bg-[#FF4D4D] py-2 px-2 text-center transition-all"
        >
          View Certificate
        </a>

        <a
          href={shareLink}
          target="_blank"
          rel="noreferrer"
          className="text-[#4dff00] bg-transparent border border-[#4dff00] font-mono font-bold text-xs sm:text-sm rounded-xl hover:text-black hover:bg-[#4dff00] py-2 px-2 text-center transition-all"
        >
          Share Credential
        </a>
      </div>
    </div>
  );
};

export default function Certification() {
  const CeteficateData = [
    {
      id: "01",
      title: "ADVANCED REACT DEVELOPER",
      image: ceteficate1,
      issuedBy: "Google",
      skillBadge: "Advanced React & State Management",
      courseStatus: "Full Curriculum and Exam completed.",
      viewLink: "#",
      shareLink: "#",
    },
    {
      id: "02",
      title: "GOOGLE CLOUD FOUNDATIONS",
      image: ceteficate1,
      issuedBy: "Google",
      skillBadge: "Cloud Infrastructure & Core Services",
      courseStatus: "Full Curriculum and Exam completed.",
      viewLink: "#",
      shareLink: "#",
    },
    {
      id: "03",
      title: "UX/UI DESIGN SPECIALIZATION",
      image: ceteficate1,
      issuedBy: "Google",
      skillBadge: "Wireframing & Prototyping",
      courseStatus: "Full Curriculum and Exam completed.",
      viewLink: "#",
      shareLink: "#",
    },
    {
      id: "04",
      title: "SPRING BOOT MICROSERVICES",
      image: ceteficate1,
      issuedBy: "IBM",
      skillBadge: "Backend API Development for Sashik Mindaka",
      courseStatus: "Full Curriculum and Exam completed.",
      viewLink: "#",
      shareLink: "#",
    },
  ];

  return (
    <section className="bg-[#0B0C0A] py-16 px-4 sm:px-8 md:px-12 xl:px-16 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-wrap items-baseline gap-4 mb-12">
        <span className="font-sans font-black tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black bg-[#d4ff33] px-3">
          FEATURED.
        </span>
        <span className="font-sans font-black tracking-tighter text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-amber-50">
          (CERTIFICATIONS SHOWCASE)
        </span>
      </div>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {CeteficateData.map((project, index) => (
          <CertificateCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}