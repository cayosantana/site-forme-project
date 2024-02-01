import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import './carrossel.css'


const Carrossel = ( ) => {
    return ( 
        <>
            <div>
                <Swiper slidesPerView={3} spaceBetween={50} navigation={true} pagination={{ clickable: false }} className='swiper-carrossel'>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <h1>Teste 01</h1>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <h1>Teste 02</h1>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <h1>Teste 03</h1>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <h1>Teste 04</h1>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
     );
}
 
export default Carrossel;