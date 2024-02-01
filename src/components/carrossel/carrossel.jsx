import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'




const Carrossel = ( ) => {
    return ( 
        <>
            <div>
                <Swiper slidesPerView={3} spaceBetween={50} navigation={true} pagination={{ clickable: false }}>
                    <SwiperSlide>
                        <h1>Teste 01</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Teste 02</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Teste 03</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>Teste 04</h1>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
     );
}
 
export default Carrossel;