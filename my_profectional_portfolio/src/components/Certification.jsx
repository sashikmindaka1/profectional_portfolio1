import React from 'react'
import ceteficateimg1 from "../assests/1755791632568.jpeg";
import ceteficateimg2 from "../assests/cetimg2.jpeg";
import ceteficateimg3 from "../assests/ceteimg3.jpg";
import ceteficateimg4 from "../assests/1770061199018 (1).jpeg";
import ceteficateimg5 from "../assests/py2.jpg";
import ceteficateimg6 from "../assests/jer123.jpg";

// 1. Data array ekata 'title' ekathu kara
const CeteficateData = [
  {
    id: 1,
    title: "Oracle Certified Foundations Association", // Methanata adala nama danna
    image: ceteficateimg1,
    credentialLink: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5534F0B37467CEEA077C85A39E4429A6E8BCFE6BF3CD5530E21839A8A77110D1", 
  },
  {
    id: 2,
    title: "Crash Cource on Python",
    image: ceteficateimg2,
    credentialLink: "https://www.coursera.org/account/accomplishments/verify/5OX6UI8MNA71",
  },
  {
    id: 3,
    title: "Java Training Cource",
    image: ceteficateimg3,
    credentialLink: "https://www.udemy.com/certificate/UC-07211af2-a082-4cfe-a53a-c4af918dff4c/",
  },
  {
    id: 4,
    title: "Introduction to Career Skill in Software Development",
    image: ceteficateimg4,
    credentialLink: "https://www.linkedin.com/learning/certificates/20341d763b1f3256a1d5fd307b62dcc349db98e9d1f16c406337537f7a56188f?trk=share_certificate",
  },
  {
    id: 5,
    title: "Programming in Python - 1",
    image: ceteficateimg5,
    credentialLink: "https://open.uom.lk/lms/mod/customcert/my_certificates.php?userid=339686",
  },
  {
    id: 6,
    title: "Flutter Masterclass",
    image: ceteficateimg6,
    credentialLink: "https://www.udemy.com/certificate/UC-da5270ce-0102-4d28-b797-b8da4a567fa5/",
  }
];

// 2. Card eke udin title eka damma saha image eka loku kara
const CeteficateCard = ({title, image, credentialLink}) => {
  return(
    <a href={credentialLink}
       target='_blank'
       rel="noopener noreferrer"
       className="flex flex-col bg-[#242424] border border-white/10 rounded-2xl p-4 overflow-hidden hover:-translate-y-2 hover:border-amber-50 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-300"
    >
      
      {/* Certificate eke nama udin pennanawa */}
      <h2 className="text-gray-200 text-sm md:text-base font-semibold mb-3 tracking-wide line-clamp-1">
        {title}
      </h2>

      {/* Image eka wata raum karala height eka wadi kara (h-64) */}
      <div className="w-full h-64 sm:h-72 overflow-hidden rounded-xl bg-white/5">
        <img 
         src={image} 
         alt={title}
         className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

    </a>
  );
};

// main component
export default function Certification() {
  return (
    <section className="bg-[#1A1A1A] py-20 px-6 lg:px-24 min-h-screen">
      
      {/* Header Section */}
      <div className="mb-16">
        <h3 className="text-amber-50 text-lg lg:text-xl font-medium tracking-widest uppercase mb-4 text-center">
          Featured
        </h3>
        <h1 className="font-sans font-black tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-amber-50 text-center">
          CERTIFICATIONS SHOWCASE
        </h1>
      </div>

      {/* Grid eke columns 4 idan 3 ta adu kara cards loku wela penna */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {CeteficateData.map((cert) => (
          <CeteficateCard
            key={cert.id}
            title={cert.title}      /* Aluthin title eka pass karanawa */
            image={cert.image}
            credentialLink={cert.credentialLink}
          />
        ))}
      </div>
   
   </section> 
  );
}