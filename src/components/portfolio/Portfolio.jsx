import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/assetsC-5.jpg'
import IMG2 from '../../assets/assetsivb-4.jpg'
import IMG3 from '../../assets/assetsC-5.jpg'
import IMG4 from '../../assets/assetsC-5.jpg'
import IMG5 from '../../assets/assetsL-13.jpg'
import IMG6 from '../../assets/assetsC-5.jpg'



/* =================== ORIGINAL PARA EDICION ====================== */

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Proyectos Recientes</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Titulo para el Portafolio</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Titulo para el Portafolio</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Titulo para el Portafolio</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Titulo para el Portafolio</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Titulo para el Portafolio</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Titulo para el Portafolio</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio


/* ================ EJEMPLO OPCIONAL ================ */
/* // DO NOT USE THE IMAGES IN PRODUCTION


const data = [
    {
        id: 1,
        Image: IMG1,
        title: 'Crypto Currency Dashboard & Financial Visualization',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shorts/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
    },
    {
        id: 2,
        Image: IMG2,
        title: 'Charts templates & infographics in Figma',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shorts/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    },
    {
        id: 3,
        Image: IMG3,
        title: 'Figma dashboard UI kit for data design web apps',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shorts/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    },
    {
        id: 4,
        Image: IMG4,
        title: 'Maintaining tasks and tracking progress',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shorts/16955822-Maintaining-tasks-and-tracking-progress'
    },
    {
        id: 5,
        Image: IMG5,
        title: 'Charts templates & infographics in Figma',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shorts/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
    },
    {
        id: 6,
        Image: IMG6,
        title: 'Charts templates & infographics in Figma',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shorts/15887665-Orion-UI-kit-Charts-templates-infographics-in-figma'
    },
]

const Portfolio = () => {
    return (
      <section id='portfolio'>
        <h5>Proyectos Recientes</h5>
        <h2>Portafolio</h2>
  
        <div className="container portfolio__container"> {
            data.map(({id, image, title, github, demo}) => {
                return (
                    <article key={id} className='portfolio__item'>
                        <div className="portfolio__item-image">
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className='portfolio__item-cta'>
                        <a href={github} className='btn' target='_blank'>Github</a>
                        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                )
            })
        }
        </div>
      </section>
    )
  }
  
  export default Portfolio */