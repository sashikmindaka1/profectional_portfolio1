import React from 'react'
import myimg1 from '../assests/myimg1.jpg';


export default function Hero() {
  return (
    <section>
      <div className='p-7'>
        <img src={myimg1} alt="my image 1" />
      </div>
    </section>
  )
}
