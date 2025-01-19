import React from 'react'
import img from "../../assets/img/vision.jpg"

const Vision = () => {
  return (
    <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-16'>
        <div className='w-full md:w-2/5'>
            <img src={img} alt='img' className='rounded-lg'/>
        </div>

        <div className='w-full md:w-2/4 space-y-4'>
            <h1 className='text-4xl font-bold'>Our Vision</h1>
            <h2 className='font-semibold text-lg lg:text-2xl'>
                Empower individuals to achieve sustainable mobility solutions and 
                inspire a positive impact on the environment
            </h2>
            <p className='text-sm lg:text-base'>
                At WheelsDeal, we envision a world where every individual has access to reliable and eco-friendly transportation. We strive to offer sustainable mobility solutions that not only make transportation easier but also leave a positive mark on our environment. Our goal is to empower individuals to make informed decisions about their vehicles, ensuring that each purchase contributes to a cleaner and more sustainable future.
            </p>
            <p className='text-sm lg:text-base'>
                We believe in innovation, customer satisfaction, and taking responsibility for the impact we create. By offering a diverse range of eco-friendly vehicles, we aim to inspire change in how people view transportation. Our vision goes beyond selling cars – we’re about creating a community of environmentally conscious individuals driving towards a brighter future.
            </p>
        </div>

     
    </div>
  )
}

export default Vision
