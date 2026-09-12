import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ManifestoSection from "./components/ManifestoSection"  
import AboutLanguages from "./components/AboutLanguages" 
import Certification from "./components/Certification"
import Featured from "./components/featured"
import Education from "./components/Education"
import Footer from "./components/Footer"

function App() {
  return(
    <>
   <Navbar/>
   
   <ManifestoSection />
   <AboutLanguages />
   <Featured />
   <Certification />
   <Education />
   <Footer />
   </>
  )
}

export default App
