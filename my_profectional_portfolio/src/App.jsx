import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ManifestoSection from "./components/ManifestoSection"  
import AboutLanguages from "./components/AboutLanguages" 
import Certification from "./components/Certification"
import Featured from "./components/featured"

function App() {
  return(
    <>
   <Navbar/>
   
   <ManifestoSection />
   <AboutLanguages />
   <Featured />
   <Certification />
   </>
  )
}

export default App
