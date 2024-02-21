import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './image/logo_forme_p&bPrancheta 3.png'
import './menu.css'


const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return ( 
        <>
            <nav>
                <a href="/"><img className='logo' src={logo} alt="logo forme" /></a>
                <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul id='navbar' className={menuOpen ? "open" : ""}>
                    <li><NavLink id='link'  to="/">Inicial</NavLink></li>
                    <li><NavLink id='link'  to="about">Sobre</NavLink></li>
                    <li><NavLink id='link-destaque' to="revenda">Seja Nosso Revendedor</NavLink></li>
                </ul>
            </nav>
        </>
     );
}

 
export default Menu;