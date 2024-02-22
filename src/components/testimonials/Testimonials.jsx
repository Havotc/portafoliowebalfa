import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/assetsWb-8.jpg'
import AVTR2 from '../../assets/assetsWb-8.jpg'
import AVTR3 from '../../assets/assetsWb-8.jpg'
import AVTR4 from '../../assets/assetsWb-8.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


/* =================== PROGRAMACION ORIGINAL =================== */

/* const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Opiniones de los Clientes</h5>
      <h2>Testimonios</h2>

      <div className="container testimonials__container">
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Archivos de Ejemplo</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa molestiae asperiores assumenda! Architecto accusamus suscipit harum exercitationem molestias vitae, voluptas, sed aspernatur, voluptates iure dicta optio eum. Provident, dolor.
            </small>
        </article>
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Archivos de Ejemplo</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa molestiae asperiores assumenda! Architecto accusamus suscipit harum exercitationem molestias vitae, voluptas, sed aspernatur, voluptates iure dicta optio eum. Provident, dolor.
            </small>
        </article>
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Archivos de Ejemplo</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa molestiae asperiores assumenda! Architecto accusamus suscipit harum exercitationem molestias vitae, voluptas, sed aspernatur, voluptates iure dicta optio eum. Provident, dolor.
            </small>
        </article>
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Archivos de Ejemplo</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa molestiae asperiores assumenda! Architecto accusamus suscipit harum exercitationem molestias vitae, voluptas, sed aspernatur, voluptates iure dicta optio eum. Provident, dolor.
            </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials */



/* ============= EJEMPLO DE OTRA FORMA DE PROGRAMAR ESTE ARCHIVO ================== */

const data = [
  {
  avatar:AVTR1,
  name:'Tina snow',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa molestiae asperiores assumenda! Architecto accusamus suscipit harum exercitationem molestias vitae, voluptas, sed aspernatur, voluptates iure dicta optio eum. Provident'
},
{
  avatar:AVTR2,
  name:'Shatta Wale',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa molestiae asperiores assumenda! Architecto accusamus suscipit harum exercitationem molestias vitae, voluptas, sed aspernatur, voluptates iure dicta optio eum. Provident'
},
{
  avatar:AVTR3,
  name:'Kwame Despite',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa molestiae asperiores assumenda! Architecto accusamus suscipit harum exercitationem molestias vitae, voluptas, sed aspernatur, voluptates iure dicta optio eum. Provident'
},
{
  avatar:AVTR4,
  name:'Ana McBrown',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa molestiae asperiores assumenda! Architecto accusamus suscipit harum exercitationem molestias vitae, voluptas, sed aspernatur, voluptates iure dicta optio eum. Provident'
}
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Opiniones de los Clientes</h5>
      <h2>Testimonios</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      > 
     
      {
        data.map(({avatar, name, review}, index) => {
          return (
              
              <SwiperSlide key={index} className="testimonials">
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>  
              </SwiperSlide>
          )
        })
      }   
      </Swiper>
    </section>
  )
}

export default Testimonials