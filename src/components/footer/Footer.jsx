import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DIAPCORE</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Acerca</a></li>
        <li><a href="#exeperience">Exeperiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Portafolio</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contactanos</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com"><FaFacebookF/></a>
        <a href="https://www.instagram.com"><FiInstagram/></a>
        <a href="https://www.twitter.com"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; DIAPCORE EJEMPLO. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer