import React from 'react';
import FormRevenda from '../form/form';
import './revenda.css'
import fotoback from './image/background_form.png'


const Revenda = () => {
    return ( 
        <>
            <div className='container-revenda'>
                <img className='foto-back' src={fotoback} alt="" />
                <div className='container-form'>
                    <FormRevenda/>
                </div>
            </div>
        </>
     );
}
 
export default Revenda;