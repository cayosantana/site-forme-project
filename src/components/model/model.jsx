import React from 'react';
import './model.css'
import Footer from '../footer/footer';

import modelImage from './image/Foto-modelos-forme.png'

const Model = () => {
    return ( 
        <>
            <div id='container-model'>
                <img src={modelImage} alt="Foto do modelo de bermuda" />
                <div className='container-text-model'>
                    <h2>PHYSIQUE SHORTS</h2>
                    <p>A FORME é pioneira nas inovações dos shorts Masculino Physique, como o ajuste interno para a cintura e os dois modelos diferentes para caber nas diferentes federações. FORME conquista mercado de Físico Masculino e Muscular em diversos países.</p>
                    <div>
                        <h4>São mais de 18 designs</h4>
                        <h4>Em 02 modelos diferentes</h4>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
     );
}
 
export default Model;