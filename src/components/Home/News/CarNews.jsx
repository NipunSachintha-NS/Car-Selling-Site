import React from 'react'
import Slider from 'react-slick';
import CarNewsCard from './CarNewsCard';

const CarNews = () => {

    const newsData = [
        {
            id:0,
            img:"/src/assets/img/news1.jpg",
            desc:"Toyota touts internal combustion engine potential, even in Ev age",
        },
        {
            id:1,
            img:"/src/assets/img/news2.jpg",
            desc:"BMW Group India clocks best-ever annual sales in 2023, leads luxury electric car segment",
        },
        {
            id:2,
            img:"/src/assets/img/news3.jpg",
            desc:"MG Astor 2024 launched in India, price starts at Rs 9.98 lakh",
        },
        {
            id:3,
            img:"/src/assets/img/news4.jpg",
            desc:"Kia Sonet facelift launced in India at Rs 7.99 lakh, Tata Nexon & Maruti Suzuki Brezza rival",
        },
        {
            id:4,
            img:"/src/assets/img/news3.jpg",
            desc:"First Shift: New-vehicle inventory reaches 3-year high",
        },
        {
            id:5,
            img:"/src/assets/img/news4.jpg",
            desc:"JLR India sales rise 74% in Q3 on robust demand for Range Rover, Range Rover Velar, Defender",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    }
  return (
    <div className='container mt-14'>
      <h1 className='font-bold text-4xl text-center'>Cars <span className='text-primary'>News & Advices</span></h1>

      <p className='text-center py-4'>Stay updated with the latest trends, news, and expert advice in the automobile industry. 
      From innovations in electric vehicles to the latest car launches, we bring you the best insights.</p>
      
      <div className='mt-8'>
        <Slider {...settings}>
            {newsData.map((item) => (
                <CarNewsCard key={item.id} img={item.img} desc={item.desc} />
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default CarNews
