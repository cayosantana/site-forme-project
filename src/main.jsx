import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Home from './components/home/home'
import About from './components/about/about'
import { register } from 'swiper/element/bundle'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
