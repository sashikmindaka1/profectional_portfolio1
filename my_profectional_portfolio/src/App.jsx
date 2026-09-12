import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ManifestoSection from "./components/ManifestoSection"  
import AboutLanguages from "./components/AboutLanguages" 
import Certification from "./components/Certification"
import Featured from "./components/featured"
import Education from "./components/Education"

function App() {
  return(
    <>
   <Navbar/>
   
   <ManifestoSection />
   <AboutLanguages />
   <Featured />
   <Certification />
   <Education />
   </>
  )
}

export default App
