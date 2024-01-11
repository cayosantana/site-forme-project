import React from 'react';
import { Link } from 'react-router-dom';
import logo from './imagens/logo_forme_p&bPrancheta 3.png'
import './menu.css'


const Menu = () => {
    return ( 
        <>
            <div className='container-menu'>
                <a href="/"><img className='logo' src={logo} alt="logo forme" /></a>
                <nav className='menu'>
                    <ul>
                        <li><Link className='link' to="/">Inicial</Link></li>
                        <li><Link className='link' to="about">Sobre</Link></li>
                    </ul>
                </nav>
            </div>
        </>
     );
}
 
export default Menu;