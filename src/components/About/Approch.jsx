import React from 'react'
import img from "../../assets/img/approch.jpg"

const Approch = () => {
  return (
    <div className='flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-16'>
      <div className='w-full md:w-2/4 space-y-4'>
          <h1 className='text-4xl font-bold'>Our Approach</h1>
          <h2 className='font-semibold text-lg lg:text-2xl'>
              Empower individuals to achieve sustainable mobility solutions and 
              inspire a positive impact on the environment
          </h2>
          <p className='text-sm lg:text-base'>
              At WheelsDeal, our approach is simple but effective – we prioritize the needs of our customers while ensuring that our business practices are environmentally responsible. Our team of experts is dedicated to providing tailored advice and support, helping each customer choose the right vehicle that aligns with their lifestyle and values.
          </p>
          <p className='text-sm lg:text-base'>
              By focusing on customer satisfaction and eco-friendly practices, we aim to foster long-term relationships with our clients. We believe in transparency, reliability, and a seamless experience from the moment you land on our website until the moment you drive off in your new car. Our customer-first mentality ensures that you always get the best service, the best cars, and the best deals.
          </p>
      </div>


        <div className='w-full md:w-2/5'>
            <img src={img} alt='img' className='rounded-lg'/>
        </div>
    </div>
  )
}

export default Approch
