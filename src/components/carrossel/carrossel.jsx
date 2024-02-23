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
            <div id='container-carrossel'>
                <Swiper spaceBetween={50} navigation={true} pagination={{ clickable: false }} breakpoints={{1200: {slidesPerView: 3}, 800: {slidesPerView: 2}, 300: {slidesPerView: 1}}} className='swiper-carrossel'>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={sandStorm} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>SANDSTORM</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={sunset} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>SUNSET</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={pinkStorm} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>PINK STORM</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={neonOcean} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>NEON OCEAN</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={marblestorme} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>MARBLESTORME</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={purpleDream} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>PURPLE DREAM</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={purpleOcean} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>PURPLE OCEAN</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={strongRed} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>STRONG RED</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={pinkOcean} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>PINK OCEAN</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={redDiamond} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>RED DIAMOND</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={lemonDiamond} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>LEMON DIAMOND</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={purpleDiamond} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>PURPLE DIAMOND</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={blueStorm} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>BLUE STORM</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={debut} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>DEBUT</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={deepOcean} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>DEEP OCEAN</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={mantela} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>MANTELA</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={ohaio} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>OHAIO</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide-carrossel'>
                        <div className='container-foto'>
                            <img className='image' src={tesla} alt=''/>
                        </div>
                        <div className='container-text'>
                            <h5>PHYSIQUE SHORTS DESIGN</h5>
                            <h2 className='h2-carrossel'>TESLA</h2>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </>
     );
}
 
export default Carrossel;