import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import './carrossel.css'

import blueStorm from './image/BLUE STORM FINAL.jpg'
import debut from './image/DEBUT FINAL.jpg'
import deepOcean from './image/DEEP OCEAN FINAL.jpg'
import lemonDiamond from './image/LEMON DIAMOND FINAL.jpg'
import mantela from './image/MANTELA FINAL.jpg'
import marblestorme from './image/MARBLESTORME FINAL.jpg'
import neonOcean from './image/NEON OCEAN FINAL.jpg'
import ohaio from './image/OHAIO FINAL.jpg'
import pinkOcean from './image/PINK OCEAN FINAL.jpg'
import pinkStorm from './image/PINK STORM FINAL.jpg'
import purpleDiamond from './image/PURPLE DIAMOND FINAL.jpg'
import purpleDream from './image/PURPLE DREAM.jpg'
import purpleOcean from './image/PURPLE OCEAN FINAL.jpg'
import redDiamond from './image/RED DIAMOND FINAL.jpg'
import sandStorm from './image/SANDSTORM FINAL.jpg'
import strongRed from './image/STRONG RED FINAL.jpg'
import sunset from './image/SUNSET FINAL.jpg'
import tesla from './image/TESLA  FINAL.jpg'


const Carrossel = ( ) => {
    return ( 
        <>
            <div>
                <Swiper slidesPerView={3} spaceBetween={50} navigation={true} pagination={{ clickable: false }} className='swiper-carrossel'>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={blueStorm} alt=''/>
                        </div>
                    </SwiperSlide>
                    <div className='container-text'>
                        <h5>PHYSIQUE SHORTS DESIGN</h5>
                        <h2>BLUE STORM</h2>
                    </div>
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