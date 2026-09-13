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
    <>
   <Navbar/>
   
   <ManifestoSection />
   <AboutLanguages />
   <Projects />
   <Certification />
   <Education />
   <Footer />
   </>
  )
}

export default App
