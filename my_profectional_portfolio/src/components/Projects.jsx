
import React from 'react'
import { useState } from 'react'
import imgt1 from '../assests/imgt1.png';
import imgGit from '../assests/images.png';


// projects 
const ChooseOption = ()=> {

  const [activeTab, setActiveTab] = useState('All');

  // creating categery array
  const categeries = ['All', 'Website', 'Web Application', 'Mobile Apps', 'UI Design'];

  return(
    <div className='flex flex-wrap gap-4 px-5 mt-6 text-2xl text-amber-50'>
      {categeries.map((categery) =>(
        <button className={`px-4 py-2 border rounded-full transition-colors ${
            activeTab === categery ? 'bg-amber-50 text-black border-amber-50' : 'text-amber-50 border-amber-50/30'
          }`}
         key={categery}
         onClick={() => setActiveTab(categery)}
         >
          {categery}
        </button>

      ))}
    </div>
  )
} 



export default function Projects({
  categoryName, projectName, image, description, github
}) {

  const Projectlist = [
    {
     categoryName : 'web Application',
     projectName : 'Travelmania',
     image: imgt1,
     description : <button>info</button>,
     github : imgGit
    },

  ]

  return (

    <div className='bg-black'>
      
      <div>
      <h1 className='text-2xl lg:text-4xl text-amber-50 py-2 lg:py-5 lg:px-5 font-semibold tracking-widest uppercase'>My Works</h1>
      <h1 className='text-4xl lg:text-6xl text-amber-50 py-2 lg:py-5 lg:px-5 font-semibold tracking-widest uppercase'>Features Projects
      </h1>
      <div>
        <ChooseOption />
      </div>

      {/* grid show */}

      </div>
    </div>
  )
}
