import React from 'react'
import myimg1 from '../assests/Untitled_design__13_-removebg-preview.png';


export default function Hero() {
  return (
    <section className='bg-amber-600'>

      <div className='w-640 h-64 lg:w-1030 lg:h-96'>
        <img src={myimg1} alt="my image 1" />
        <h1>i'm sashik mindaka</h1>
      </div>
    </section>
  )
}
