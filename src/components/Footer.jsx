import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-14 bg-secondary text-white'>
        <div className='flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5'>
            <div className='w-full md:w-1/4'>
                <h1 className='font-semibold text-2xl pb-4'>WheelsDeal</h1>
                <p className='mb-2 text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, 
                    illo maiores. Unde, minus! Exercitationem voluptatibus delectus aut 
                    ea cum consectetur!</p>
            </div>
            <div>
                <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0'>Pages Links</h1>
                <div className='flex flex-col gap-2 font-medium'>
                    <a href='/about' className='hover:translate-x-3 transition duration-200 ease-linear'>About Us</a>
                    <a href='/cars' className='hover:translate-x-3 transition duration-200 ease-linear'>Our Cars</a>
                    <a href='/services' className='hover:translate-x-3 transition duration-200 ease-linear'>Servicess</a>
                </div>
            </div>
            <div>
                <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0'>Used Cars for sale</h1>
                <div className='flex flex-col gap-2 font-medium'>
                  <a href='/' className='hover:translate-x-3 transition duration-200 ease-linear'>Toyota Camry</a> 
                  <a href='/' className='hover:translate-x-3 transition duration-200 ease-linear'>Chevrolet Corvette</a> 
                  <a href='/' className='hover:translate-x-3 transition duration-200 ease-linear'>Volkswagen Golf</a> 
                  <a href='/' className='hover:translate-x-3 transition duration-200 ease-linear'>Nissan Rogue</a> 
                </div>
            </div> 

            <div>
                <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0'>Learn More</h1>
                <div className='flex flex-col gap-2 font-medium'>
                   <a href='/' className='hover:translate-x-3 transition duration-200 ease-linear'>User-friendly</a>   
                   <a href='/' className='hover:translate-x-3 transition duration-200 ease-linear'>Search and Filters</a> 
                   <a href='/' className='hover:translate-x-3 transition duration-200 ease-linear'>Secure Payment</a> 
                   <a href='/' className='hover:translate-x-3 transition duration-200 ease-linear'>Geolocation Services</a> 
                </div>
            </div>
        </div>
        <div>
            <p className='text-center py-4'>
                @copyright developed by 
                <span className='text-primary font-semibold mx-2'>WheelsDeals</span>| All rights reserved
            </p>
        </div>
    </footer>
  )
}

export default Footer
