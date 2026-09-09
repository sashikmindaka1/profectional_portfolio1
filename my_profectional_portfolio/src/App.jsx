import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ManifestoSection from "./components/ManifestoSection"  
import AboutLanguages from "./components/AboutLanguages" 
import Featured from "./components/Featured"

function App() {
  return(
    <>
   <Navbar/>
   
   <ManifestoSection />
   <AboutLanguages />
   <Featured />
   </>
  )
}

export default App
