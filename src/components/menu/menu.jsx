import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './image/logo_forme_p&bPrancheta 3.png'
import './menu.css'


const Menu = () => {
    
    return ( 
        <>
            <nav>
                <a href="/"><img className='logo' src={logo} alt="logo forme" /></a>
                <div className='menu'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul id='navbar'>
                    <li><NavLink id='link' className='active' to="/">Inicial</NavLink></li>
                    <li><NavLink id='link' className='active' to="about">Sobre</NavLink></li>
                    <li><NavLink id='link-destaque' className='active' to="revenda">Seja Nosso Revendedor</NavLink></li>
                </ul>
            </nav>
        </>
     );
}

 
export default Menu;