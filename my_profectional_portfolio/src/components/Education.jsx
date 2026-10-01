import React from 'react'
import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section className='bg-black pb-20 overflow-hidden'>

      {/* --- HEADER SECTION --- */}
      <motion.div 
        className='w-[90%] md:w-[85%] mx-auto pt-12 mb-10'
        initial={{ opacity: 0, scale: 0.8, y: 80 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Mobile ekedi title eka yata yata yanna flex-col damma */}
        <div className='flex flex-col justify-center items-center w-full gap-2'>
          <h2 className='font-mono text-gray-400'>
      ACADEMIC JOURNEY
     </h2>
    <h1 className='font-sans font-black text-[clamp(2rem,6vw,8rem)] text-white text-center'>
    MY EDUCATION
     </h1>
  
</div>
<p className='border-b border-white/20 py-4 w-full'></p>
      </motion.div>

      {/* --- TIMELINE GRID SECTION --- */}
      {/* Mobile ekedi grid-cols-1 (eka peliyai). Loku screens waladi lg:grid-cols-[1fr_10%_1fr] */}
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_10%_1fr] gap-8 lg:gap-4 w-[90%] md:w-[85%] mx-auto items-stretch'>

        {/* Education Item 1: Future Goal */}
        <motion.div 
          className="bg-[#0a0a0a] border border-white/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-white/60 hover:bg-[#111111] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] relative flex flex-col h-full lg:col-start-1"
          initial={{ opacity: 0, x: -50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="flex justify-between items-start mb-6">
            <span className="bg-white text-black font-mono font-bold text-xs px-3 py-1 rounded-md uppercase tracking-widest">
              [ FUTURE GOAL ]
            </span>
            <span className="text-gray-400 font-mono text-sm font-bold">2029</span>
          </div>
          <h3 className="font-sans font-black tracking-tighter text-2xl sm:text-4xl text-white mb-2 uppercase">
            MSc in Software Eng <span className="text-gray-400 font-normal text-xl sm:text-4xl">(Planning)</span>
          </h3>
          <div className="flex flex-wrap items-center justify-between gap-y-2 font-mono text-sm sm:text-base text-gray-400 mb-6 border-b border-white/10 pb-4">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              Postgraduate Studies (TBD)
            </p>
            <p className="text-white font-bold">2029 - Expected</p>
          </div>
          <p className="font-mono text-sm sm:text-base text-gray-400 leading-relaxed">
            Planning to pursue a Master of Science in Software Engineering to deepen technical mastery, drive advanced R&D, and lead large-scale engineering initiatives.
          </p>
        </motion.div>

        {/* Center timeline dividing line - Mobile ekedi penne na (hidden lg:block) */}
        <div className='hidden lg:block col-start-2 row-span-5 justify-self-center w-1.5 bg-gradient-to-b from-white/10 via-white/50 to-white/10 relative overflow-hidden rounded-full'>
          <motion.div 
            className="absolute inset-0 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />
        </div>

        {/* Empty div for grid layout - Mobile ekedi penne na */}
        <div className="hidden lg:block"></div>
        <div className="hidden lg:block"></div>

        {/* Education Item 2: Current Undergraduate Degree */}
        <motion.div 
          className="bg-[#0a0a0a] border border-white/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-white/60 hover:bg-[#111111] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] relative flex flex-col h-full lg:col-start-3"
          initial={{ opacity: 0, x: 50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="flex justify-between items-start mb-6">
            <span className="bg-white text-black font-mono font-bold text-xs px-3 py-1 rounded-md uppercase tracking-widest">
              [ CURRENT ]
            </span>
            <span className="text-gray-400 font-mono text-sm font-bold">Present</span>
          </div>
          <h3 className="font-sans font-black tracking-tighter text-2xl sm:text-4xl text-white mb-2 uppercase">
            BSc (Hons) in Software Eng <span className="text-gray-400 font-normal text-xl sm:text-4xl">(UGC)</span>
          </h3>
          <div className="flex flex-wrap items-center justify-between gap-y-2 font-mono text-sm sm:text-base text-gray-400 mb-6 border-b border-white/10 pb-4">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              NSBM Green University
            </p>
            <p className="text-white font-bold">Batch 25.1 (UGC)</p>
          </div>
          <p className="font-mono text-sm sm:text-base text-gray-400 leading-relaxed">
            Currently reading for a Bachelor's degree in Software Engineering. Gaining hands-on expertise in full-stack architecture, object-oriented design, algorithms, and end-to-end system development.
          </p>
        </motion.div>

        {/* Education Item 3: School Background */}
        <motion.div 
          className="bg-[#0a0a0a] border border-white/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-white/60 hover:bg-[#111111] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] relative flex flex-col h-full lg:col-start-1"
          initial={{ opacity: 0, x: -50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <div className="flex justify-between items-start mb-6">
            <span className="bg-gray-300 text-black font-mono font-bold text-xs px-3 py-1 rounded-md uppercase tracking-widest">
              [ FOUNDATION ]
            </span>
            <span className="text-gray-500 font-mono text-sm font-bold">School Years</span>
          </div>
          <h3 className="font-sans font-black tracking-tighter text-2xl sm:text-4xl text-white mb-2 uppercase">
            Secondary Education
          </h3>
          <div className="flex flex-wrap items-center justify-between gap-y-2 font-mono text-sm sm:text-base text-gray-400 mb-6 border-b border-white/10 pb-4">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              H/Hunagama National College (A/L)
            </p>
            <p className="text-white font-bold text-left lg:text-right w-full sm:w-auto mt-1 sm:mt-0">
              H/Ambalantota National College (O/L)
            </p>
          </div>
          <p className="font-mono text-sm sm:text-base text-gray-400 leading-relaxed">
            Completed General Certificate of Education Ordinary Level (O/L) at H/Ambalantota National College and Advanced Level (A/L) studies at H/Hunagama National College (technology stream), laying a solid mathematical and analytical foundation for engineering.
          </p>
        </motion.div>

        {/* Empty div for grid layout - Mobile ekedi penne na */}
        <div className="hidden lg:block"></div>

      </div>
    </section>
  )
}