import React from 'react'

const ServiceCards = ({icon, title}) => {
  return (
    <div className='text-center p-8 space-y-4 bg-slate-100 border-2 border-secondary hover:bg-secondary hover:text-white transition duration-300 ease-in-out rounded-md cursor-pointer '>
      <p>{icon}</p>
      <h1 className='text-primary text-3xl font-bold'>{title}</h1>
      <p className='text-sm'>
      We offer comprehensive services for your vehicle to ensure optimal performance and longevity. Whether it's maintaining your tires, optimizing the exhaust system, or performing essential brake repairs, our team is dedicated to keeping your car running smoothly and efficiently.
      </p>
    </div>
  )
}

export default ServiceCards
