import React from 'react'
import ReactDOM from 'react-dom/client'
import { register } from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css'
import Home from './components/home/home'
import About from './components/about/about'
import Menu from './components/menu/menu'
import Revenda from './components/revenda/revenda'
import Model from './components/model/model';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/model' element={<Model/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/revenda' element={<Revenda/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
