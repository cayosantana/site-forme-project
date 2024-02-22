import React from 'react';
import './footer.css'
import fb from './image/fb.png'
import insta from './image/insta.png'
import twitter from './image/twitter.png'

const Footer = () => {
    return ( 
        <>
            <div className='container-footer'>
                <div className='sb__footer section__padding'>
                    <div className='sb__footer-links'>
                        <div className='sb__footer-links-div'>
                            <h4>Company</h4>
                            <a href="/">
                                <p>Home</p>
                            </a>
                            <a href="/about">
                                <p>Sobre</p>
                            </a>
                            <a href="/revenda">
                                <p>Seja Nosso Revendedor</p>
                            </a>
                        </div>
                        <div className='sb__footer-links-div'>
                            <h4>Teste1</h4>
                            <a href="/employer1">
                                <p>Employer1</p>
                            </a>
                            <a href="/employer1">
                                <p>Employer1</p>
                            </a>
                            <a href="/employer1">
                                <p>Employer1</p>
                            </a>
                        </div>
                        <div className='sb__footer-links-div'>
                            <h4>Redes sociais</h4>
                            <div className='socialmedia'>
                                <p><img src={fb} alt="FaceBook"/></p>
                                <p><img src={twitter} alt="Twitter"/></p>
                                <p><img src={insta} alt="Instagram"/></p>
                            </div>
                        </div>
                    </div>

                    <hr></hr> 

                    <div className='sb__footer-below'>
                        <div className='sb__footer-copyright'>
                            <p>
                                @{new Date().getFullYear()} Forme. Todos direitos reservados.
                            </p>
                        </div>
                        <div className='sb__footer-below-links'>
                            <a href="#"><div><p>Termos e Condições</p></div></a>
                            <a href="#"><div><p>Privacidade</p></div></a>
                            <a href="#"><div><p>Segurança</p></div></a>
                            <a href="#"><div><p>Cookies e Declaração</p></div></a>
                        </div>
                    </div> 
                </div>
            </div>
        </>
     );
}
 
export default Footer;
