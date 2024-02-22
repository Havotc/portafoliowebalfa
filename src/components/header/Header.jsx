import React from 'react'
import './header.css'
import CTA from './CTA'
import YO from '../../assets/yo2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hola, soy</h5>
            <h1>Aponte Dionelvin</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA />
            <HeaderSocials/>    

            <div className="yo">
                <img src={YO} alt="yo"/>
            </div>
            <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header

