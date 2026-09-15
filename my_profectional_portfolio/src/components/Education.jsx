import React from 'react'
import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section className='bg-black pb-20 overflow-hidden'>

      {/* --- HEADER SECTION WITH ANIMATION --- */}
      <motion.div 
        className='w-[90%] md:w-[85%] mx-auto pt-12 mb-10'
        initial={{ opacity: 0, scale: 0.8, y: 80 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-4 lg:gap-0'>
          
          <span className='font-sans font-black tracking-tighter text-[clamp(2.5rem,6vw,8rem)] whitespace-nowrap text-black inline-block border-4 border-[#d4ff33] bg-[#d4ff33] px-4 py-2 lg:px-6 lg:py-4 shadow-[0_0_30px_rgba(212,255,51,0.3)]'>
            MY EDUCATION
          </span>

          <span className='font-mono text-amber-100 pb-2 lg:pb-6'>// ACADEMIC JOURNEY</span>
        </div>
        <p className='border-b-2 border-dashed border-amber-500/30 py-4'></p>
      </motion.div>

      {/* --- TIMELINE GRID SECTION --- */}
      <div className='grid grid-cols-[1fr_10%_1fr] gap-4 w-[90%] md:w-[85%] mx-auto items-stretch'>

        {/* Education Item 1: Future Goal (MSc in Software Engineering) */}
        <motion.div 
          className="bg-[#111315] border-2 border-dashed border-amber-500/60 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-amber-400 hover:bg-[#16191e] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] relative flex flex-col h-full"
          initial={{ opacity: 0, x: -50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="flex justify-between items-start mb-6">
            <span className="bg-amber-500 text-black font-mono font-bold text-xs px-3 py-1 rounded-md uppercase tracking-widest">
              [ FUTURE GOAL ]
            </span>
            <span className="text-amber-500/50 font-mono text-sm font-bold">
              2029
            </span>
          </div>

          <h3 className="font-sans font-black tracking-tighter text-3xl sm:text-4xl text-amber-50 mb-2 uppercase">
            MSc in Software Eng <span className="text-amber-500">(Planning)</span>
          </h3>

          <div className="flex flex-wrap items-center justify-between gap-y-2 font-mono text-sm sm:text-base text-gray-400 mb-6 border-b border-gray-800 pb-4">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Postgraduate Studies (TBD)
            </p>
            <p className="text-amber-500/80 font-bold">
              2029 - Expected
            </p>
          </div>

          <p className="font-mono text-sm sm:text-base text-gray-300 leading-relaxed">
            Planning to pursue a Master of Science in Software Engineering to deepen technical mastery, drive advanced R&D, and lead large-scale engineering initiatives.
          </p>
        </motion.div>

        {/* Center timeline dividing line with animation */}
        <div className='col-start-2 row-span-5 justify-self-center w-1.5 bg-gradient-to-b from-amber-500/20 via-[#d4ff33]/50 to-gray-500/20 relative overflow-hidden rounded-full'>
          <motion.div 
            className="absolute inset-0 bg-[#d4ff33] shadow-[0_0_15px_#d4ff33]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />
        </div>

        <div></div>

        {/* Education Item 2: Current Undergraduate Degree (NSBM Green University) */}
        <div></div>
        <motion.div 
          className="bg-[#111315] border-2 border-dashed border-[#d4ff33]/60 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#d4ff33] hover:bg-[#16191e] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,255,51,0.15)] relative flex flex-col h-full col-start-3"
          initial={{ opacity: 0, x: 50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="flex justify-between items-start mb-6">
            <span className="bg-[#d4ff33] text-black font-mono font-bold text-xs px-3 py-1 rounded-md uppercase tracking-widest">
              [ CURRENT ]
            </span>
            <span className="text-[#d4ff33]/70 font-mono text-sm font-bold">
              Present
            </span>
          </div>

          <h3 className="font-sans font-black tracking-tighter text-3xl sm:text-4xl text-amber-50 mb-2 uppercase">
            BSc (Hons) in Software Eng <span className="text-[#d4ff33]">(UG)</span>
          </h3>

          <div className="flex flex-wrap items-center justify-between gap-y-2 font-mono text-sm sm:text-base text-gray-400 mb-6 border-b border-gray-800 pb-4">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4ff33] animate-pulse"></span>
              NSBM Green University
            </p>
            <p className="text-[#d4ff33] font-bold">
              Batch 25.1 (UGC)
            </p>
          </div>

          <p className="font-mono text-sm sm:text-base text-gray-300 leading-relaxed">
            Currently reading for a Bachelor's degree in Software Engineering. Gaining hands-on expertise in full-stack architecture, object-oriented design, algorithms, and end-to-end system development.
          </p>
        </motion.div>

        {/* Education Item 3: School Background (A/L & O/L) */}
        <motion.div 
          className="bg-[#111315] border-2 border-dashed border-gray-700 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-gray-500 hover:bg-[#16191e] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] relative flex flex-col h-full col-start-1"
          initial={{ opacity: 0, x: -50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <div className="flex justify-between items-start mb-6">
            <span className="bg-gray-700 text-gray-200 font-mono font-bold text-xs px-3 py-1 rounded-md uppercase tracking-widest">
              [ FOUNDATION ]
            </span>
            <span className="text-gray-500 font-mono text-sm font-bold">
              School Years
            </span>
          </div>

          <h3 className="font-sans font-black tracking-tighter text-3xl sm:text-4xl text-amber-50 mb-2 uppercase">
            Secondary Education
          </h3>

          <div className="flex flex-wrap items-center justify-between gap-y-2 font-mono text-sm sm:text-base text-gray-400 mb-6 border-b border-gray-800 pb-4">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              H/Hunagama National College (A/L)
            </p>
            <p className="text-gray-400 font-bold text-right w-full sm:w-auto mt-1 sm:mt-0">
              H/Ambalantota National College (O/L)
            </p>
          </div>

          <p className="font-mono text-sm sm:text-base text-gray-300 leading-relaxed">
            Completed General Certificate of Education Ordinary Level (O/L) at H/Ambalantota National College and Advanced Level (A/L) studies at H/Hunagama National College (technology stream), laying a solid mathematical and analytical foundation for engineering.
          </p>
        </motion.div>

        <div></div>

      </div>
    </section>
  )
}