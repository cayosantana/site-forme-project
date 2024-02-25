import React from 'react';
import FormRevenda from '../form/form';
import './revenda.css'
import fotoback from './image/background_form.png'
import Footer from '../footer/footer';


const Revenda = () => {
    return ( 
        <>
            <div className='container-revenda'>
                <img className='foto-back' src={fotoback} alt="" />
                <div className='container-form'>
                    <FormRevenda/>
                </div>
            </div>
            <Footer/>
        </>
     );
}
 
export default Revenda;