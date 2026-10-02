import React from 'react';
import { motion } from 'framer-motion';

// CustomCursor එක මෙතනින් Import කරන්න 
import CustomCursor from './components/CustomCursor';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ManifestoSection from "./components/ManifestoSection";  
import AboutLanguages from "./components/AboutLanguages"; 
import Certification from "./components/Certification";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";
import Keytools from "./components/Keytools";

// Section wrapper component for scroll animation
const AnimatedSection = ({ children, id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

function App() {
  return (
    <div className="bg-[#050505] text-white selection:bg-white selection:text-black">
      
      {/* මුළු Website එකටම අදාළව එක පාරක් පමණක් Cursor එක මෙතන දාන්න */}
      <CustomCursor />

      <Navbar />
      
      <AnimatedSection id="home">
        <Hero />
      </AnimatedSection>

      <AnimatedSection id="manifesto">
        <ManifestoSection />
      </AnimatedSection>
      
      <AnimatedSection id="projects">
        <Projects />
      </AnimatedSection>

      <AnimatedSection id="aboutme">
        <Aboutme />
      </AnimatedSection>

      <AnimatedSection id="keytools">
        <Keytools />
      </AnimatedSection>

      <AnimatedSection id="certification">
        <Certification />
      </AnimatedSection>

      <AnimatedSection id="education">
        <Education />
      </AnimatedSection>

      <AnimatedSection id="footer">
        <Footer />
      </AnimatedSection>
      
    </div>
  );
}

export default App;