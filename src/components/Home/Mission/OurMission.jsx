import React from 'react'
import img from "../../../assets/img/mission.jpg"

const OurMission = () => {
  return (
    <div className='container my-10'>
      <div>
        <h1 className='font-bold text-4xl text-center'>Our <span className='text-primary'>Mission</span></h1>
      </div>

        <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-8'>
            <div className='w-full md:w-2/4'>
                <img src={img} alt='img' className='rounded-lg'/>
            </div>

            <div className='w-full md:w-2/4 space-y-4'>
                <h1 className='font-bold text-primary text-lg lg:text-3xl'>To create a community where every journey is extraordinary.</h1>
                <h2 className='font-semibold text-lg lg:text-2xl'>Enpower individuals to achieve sustainable mobility solutions and inspire a
                    positive impact on the environment.
                </h2>
                <p className='text-sm lg:text-base'>  Our mission is to redefine the car-buying experience by offering innovative solutions that are tailored to every individual's needs. 
                We aim to make your journey seamless, convenient, and filled with value.</p>

                <p className='text-sm lg:text-base'>Beyond providing vehicles, we are dedicated to fostering a sustainable future by promoting eco-friendly practices and empowering 
                communities to make informed decisions about mobility. Together, we drive towards a greener tomorrow.
                </p>
            </div>
        </div>
    </div>
  )
}

export default OurMission
