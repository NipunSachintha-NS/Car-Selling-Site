import React from 'react'
import Vision from './Vision'
import Approch from './Approch'
import Footer from '../Footer'

const AboutUs = () => {
  return (
    <div>
      <div className='container pt-24'>
        <h1 className='font-bold text-4xl text-center'>About <span className='text-primary'>US</span></h1>
      </div>
       
       <Vision/>
       <Approch/>
       <Footer/>

    </div>
  )
}

export default AboutUs
