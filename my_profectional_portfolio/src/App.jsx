import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ManifestoSection from "./components/ManifestoSection"  
import AboutLanguages from "./components/AboutLanguages" 
import Certification from "./components/Certification"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Footer from "./components/Footer"

function App() {
  return(
    <div>
      <Navbar />
      
      <section id="home">
        <Hero />
      </section>
      <section id="manifesto">
        <ManifestoSection />
      </section>
      <section id="about">
        <AboutLanguages />
      </section>
      
      <section id="projects">
        <Projects />
      </section>

      <section id="certification">
        <Certification />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="Footer">
        <Footer />
      </section>
      
      
      
    </div>
   
  )
}

export default App
