import React from 'react';
import './home.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import slide01 from './image/banner-forme01-desk.png'
import slide02 from './image/banner-forme-02-ret.png'
import slide03 from './image/banner-forme01-mobile.png'
import slide04 from './image/banner-forme-02-ret-mob.png'
import Carrossel from '../carrossel/carrossel';
import Footer from '../footer/footer';



const Home = () => {
    

    const slides = [
        { id: '1', image: slide01 },
        { id: '2', image: slide02 },
        { id: '3', image: slide03 },
        { id: '4', image: slide04 }   
    ]

    const isLargeScreen = window.innerWidth > 800;

    const filteredSlides = isLargeScreen
    ? slides.filter(slide => slide.id === '1' || slide.id === '2')
    : slides.filter(slide => slide.id === '3' || slide.id === '4');

    return ( 
        <>
            <div>
                <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation autoplay={{ delay: 7000 }}>
                    {filteredSlides.map((item) => (
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
