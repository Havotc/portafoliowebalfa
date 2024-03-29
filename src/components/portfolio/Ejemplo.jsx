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