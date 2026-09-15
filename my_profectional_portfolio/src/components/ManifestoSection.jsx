import React from 'react'
import { motion } from 'framer-motion'

export default function ManifestoSection() {
  return (
    // Converted section to motion.section for scroll animations
    <motion.section 
      className='bg-[#0B0C0A] overflow-hidden'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className='px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 pt-16 pb-20'>

        {/* Section subtitle / tag */}
        <p className='text-xs sm:text-sm lg:text-base leading-relaxed mb-6 text-amber-50'>
          // FULLSTACK ENGINEER
        </p>

        {/* First Highlight Heading: Frontend */}
        <motion.h1 
          className='font-sans font-black tracking-tighter text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-amber-50 mt-4'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className='block md:inline'>I BUILD</span>
          <span className='text-[#0B0C0A] bg-[#d4ff33] px-3 py-1 md:px-5 md:py-2 inline-block mt-2 md:mt-0'>FRONT.</span>
        </motion.h1>
        
        {/* Second Highlight Heading: Backend */}
        <motion.h1 
          className='font-sans font-black tracking-tighter text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-amber-50 mt-4'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <span className='block md:inline'>I BUILD</span>
          <span className='text-[#0B0C0A] bg-[#86efac] px-4 py-1 md:py-2 inline-block mt-2 md:mt-0'>BACK.</span>
        </motion.h1>

        {/* Third Highlight Heading: Testing */}
        <motion.h1 
          className='font-sans font-black tracking-tighter text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-amber-50 mt-4'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className='block md:inline'>I TEST</span>
          <span className='text-[#0B0C0A] bg-[#fbbf24] px-3 py-1 md:px-5 md:py-2 inline-block mt-2 md:mt-0'>EVERYTHING.</span>
        </motion.h1>

        {/* Professional summary paragraph with fade-up animation */}
        <motion.p 
          className='text-gray-400 font-mono text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed text-left max-w-4xl pt-10 md:pt-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          "I am Sashik Mindaka, a Software Engineering undergraduate at NSBM Green University. Why rely on a distributed team when one focused engineer can connect all the dots? From crafting React frontends to architecting Java Spring Boot APIs and MySQL databases, the entire ecosystem rests in a single pair of hands. Whether building platforms like TravelMania or complex management systems, I handle the full lifecycle. No handoffs, no communication silos—just complete, end-to-end digital experiences built with an engineering mindset."
        </motion.p>

      </div>
    </motion.section>
  )
}