import React from "react";
import ceteficate1 from "../assests/travelmaniap.jpeg"; 
import { image } from "framer-motion/client";
import ceteficateimg1 from "../assests/1755791632568.jpeg";
import ceteficateimg2 from "../assests/cetimg2.jpeg";
import ceteficateimg3 from "../assests/ceteimg3.jpg";
import ceteficateimg4 from "../assests/1770061199018 (1).jpeg";

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
      title: "OCI 2025 AI Foundations Associate",
      image: ceteficateimg1,
      issuedBy: "Oracle",
      skillBadge: "AI & ML Basics, Generative AI, OCI Services",
      courseStatus: "Full Curriculum and Proctored Exam completed.",
      viewLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5534F0B37467CEEA077C85A39E4429A6E8BCFE6BF3CD5530E21839A8A77110D1",
      shareLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5534F0B37467CEEA077C85A39E4429A6E8BCFE6BF3CD5530E21839A8A77110D1",
    },
    {
      id: "02",
      title: "Crash Course on Python ",
      image: ceteficateimg2,
      issuedBy: "Google",
      skillBadge: "Python Programming, Data Structures, Debugging, Scripting, Computational Thinking",
      courseStatus: "Completed on October 30, 2025 (20 hours)",
      viewLink: "https://www.coursera.org/account/accomplishments/verify/5OX6UI8MNA71",
      shareLink: "https://www.coursera.org/account/accomplishments/verify/5OX6UI8MNA71",
    },
    {
      id: "03",
      title: "Java Training Complete Course ",
      image: ceteficateimg3,
      issuedBy: "Udemy (Crunch Coding Institute)",
      skillBadge: "Core Java, Object-Oriented Programming, Java Basics",
      courseStatus: "Completed on Aug. 19, 2025 (4 total hours)",
      viewLink: "https://www.udemy.com/certificate/UC-07211af2-a082-4cfe-a53a-c4af918dff4c/",
      shareLink: "https://www.udemy.com/certificate/UC-07211af2-a082-4cfe-a53a-c4af918dff4c/",
    },
    {
      id: "04",
      title: "Career Skills in Software Development",
      image: ceteficateimg4,
      issuedBy: "LinkedIn Learning",
      skillBadge: "Software Development, Career Management, Tech Career Skills",
      courseStatus: "Completed on September 19, 2025 (2h 2m)",
      viewLink: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Flnkd.in%2Fgv7FiRGv&urlhash=j_sb&mt=p1KazT87L6A3ZeJDCRsvG9j_ieKOBZhNX8YwtUQd1bYxb6ofO1DBSimsmEVKTRZdPxHaJfpV2Io6WMI8Xu4az3ZPflTm&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bm8%2Bx%2FZMsT0S4%2BF0WsmHJ9Q%3D%3D",
      shareLink: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Flnkd.in%2Fgv7FiRGv&urlhash=j_sb&mt=p1KazT87L6A3ZeJDCRsvG9j_ieKOBZhNX8YwtUQd1bYxb6ofO1DBSimsmEVKTRZdPxHaJfpV2Io6WMI8Xu4az3ZPflTm&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bm8%2Bx%2FZMsT0S4%2BF0WsmHJ9Q%3D%3D",
    },
  ];

  return (
    <section className="bg-[#1A1A1A] py-16 px-4 sm:px-8 md:px-12 xl:px-16 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-wrap items-baseline gap-4 mb-12">
        <span className="font-sans font-black tracking-tighter text-[clamp(2.5rem,6vw,8rem)] text-black bg-[#d4ff33] px-2">
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