import React from 'react';
import './home.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import slide01 from './imagens/banner-forme01-desk.png'
import slide02 from './imagens/banner-forme02-desk.png'
import slide03 from './imagens/banner-forme01-mobile.png'
import slide04 from './imagens/banner-forme02-mobile.png'

const Home = () => {
    

    const slides = [
        {id: '1', image: slide01}, 
        {id: '2', image: slide02},   
    ]

    return ( 
        <>
            <div>
                <h1>hello</h1>
            </div>
            <div>
                <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation autoplay={{ delay: 7000 }}>
                    {slides.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img src={item.image} alt="slider" className='slide-item'/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
        </>
     );
}
 
export default Home;