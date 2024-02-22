import React from 'react';
import './home.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import slide01 from './image/banner-forme01-desk.png'
import slide02 from './image/banner-forme02-desk.png'
import slide03 from './image/banner-forme01-mobile.png'
import slide04 from './image/banner-forme02-mobile.png'
import Carrossel from '../carrossel/carrossel';
import Footer from '../footer/footer';


const Home = () => {
    

    const slides = [
        {id: '1', image: slide01}, 
        {id: '2', image: slide02},   
    ]


    return ( 
        <>
            <div>
                <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation autoplay={{ delay: 7000 }}>
                    {slides.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img src={item.image} alt="slider" className='slide-item'/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='container-title'>
                <h1>PHYSIQUE SHORTS DESIGN</h1>
            </div>
            <div>
                <Carrossel/>   
            </div>
            <Footer/>
            
        </>
     );
}
 
export default Home;
