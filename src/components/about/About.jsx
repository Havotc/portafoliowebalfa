import React from 'react'
import './about.css'
import YO from '../../assets/assetsY-6.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'> 
      <h5>Conoce Acerca</h5>
      <h2>De Mi</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={YO} alt="About Image" />
          </div>
        </div>
      
      
        <div className="about__content">
          <div className="about__cards">
            
              <article className='about__card'>
                  <FaAward className='about__icon' />
                  <h5>Experiencia</h5>
                  <small>1 año como Fullstack</small>
              </article> 

              <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5>Clientes</h5>
                <small>1 de Venezuela</small>
              </article>
              
              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Proyectos</h5>
                <small>4 Proyectos Realizados</small>
              </article> 
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid magni nam nulla ullam ipsa maxime, cum ipsum laudantium atque sequi sint consequatur, ex dolorum optio illum odio beatae impedit? Animi. 
            </p>
            <a href="#contact" className='btn btn-primary'>Contactanos</a>
          
        </div>
      </div>
    </section>
  )
}
export default About