import './App.scss';
import { ProgressBar } from './components/ProgressBar';

function App() {

  return (
    <div className="app">
      <header className="app__header">
        <img src="KTXIO_Negative_Brand.png" alt="ktxio logo"></img>
      </header>
      <section className="app__main-section">
        <div className="app__main-section__main-tag">
          <span>
            {'<main>'}
          </span>
          <h1>
            I AM KATHE~
          </h1>
          <h2>
            Electronics & <br/>
            Telecomunications Engineer
          </h2>
          <p>
            I’m interested in web & mobile application <br/>
            development, accessibility, make end2end  <br/>
            tests, and get involved in front-end projects.
          </p>

          <button>
            View projects
          </button>
          <span>
            {'</main>'}
          </span>
        </div>
        <div className="app__main-section__main-photo">
          <figure >
            <div className="app__main-section__main-photo__oval"></div>
            <img src="Kathe_photo.png" alt="kathe" />
          </figure>
          <div>
            <p className="korean">
              ~ 안녕하세요 
            </p>
            <p className="text">
              ~ Annyeonghaseyo ~
            </p>
          </div>
          

        </div>
          <aside className="app__aside-socialmedia">
            <h2>Find me here!</h2>
            <div>
              <a href="https://github.com/katherinegonzalez" className="github">
                <img src="icons/github.svg" alt="github"></img>
              </a>
              <a href="https://www.linkedin.com/in/katherinexiomargonzalez/">
                <img src="icons/linkedin.svg" alt="github"></img>
              </a>
            </div>
          </aside>
      </section>
      <section className="app__projects-articles-section">
        <div className="app__projects-articles-section__projects-section">
          <div className="app__projects-articles-section__title">
            <h2>
              MY PROJECTS ~
            </h2>
          </div>
          <div className="app__projects-articles-section__projects-carousel">
            <button className="app__projects-articles-section__projects-carousel__left-arrow">
              <img src="arrow-left.svg" alt="flecha izquierda"/>
            </button>
            <div className="app__projects-articles-section__projects-carousel__content">
              <div className="app__projects-articles-section__projects-carousel__content__project">
                <img src="Nutriexercise.jpeg" alt="Nutriexcercise"/>
              </div>
              <div className="app__projects-articles-section__projects-carousel__content__project">
                <img src="Nutriexercise.jpeg" alt="Nutriexcercise"/>
              </div>
              <div className="app__pprojects-articles-section__projects-carousel__content__project">
                <img src="Nutriexercise.jpeg" alt="Nutriexcercise"/>
              </div>
              <div className="app__pprojects-articles-section__projects-carousel__content__project">
                <img src="Nutriexercise.jpeg" alt="Nutriexcercise"/>
              </div>
            </div>
            <button className="app__projects-articles-section__projects-carousel__right-arrow">
              <img src="arrow-right.svg" alt="flecha derecha"/>
            </button>
          </div>
           
        </div>
          <h2>
            MY ARTICLES ~
          </h2>
          <ol>
            <li>
              <a href="https://github.com/katherinegonzalez"> Modeling of a context-aware system to support interventions in physical activities </a>
            </li>
            <li>
              <a href="https://github.com/katherinegonzalez">Modelling a Context-Aware System for the Promotion of Physical Activity and Healthy Nutrition.</a>
            </li>
          </ol>
        
        
        
      </section>

      <section className="app__skills-section">
        <span>
          {'<strong>'}
        </span>
        <p>
        Love to be disciplined, responsible, patient, adaptable & <span>motivated to keep learning</span> much more about the wide world of science and technology.
        </p>
        <span>
          {'<strong>'}
        </span>

        <div className="app__skills-section__container">
          <h2>My skills ~</h2>
          <div className="app__skills-section__container__progress-bars">
          <ProgressBar skill={'Javascript'} porcentage={90}/>
          <ProgressBar skill={'HTML'} porcentage={90}/>
          <ProgressBar skill={'CSS'} porcentage={80}/>
          <ProgressBar skill={'React'} porcentage={85}/>
          <ProgressBar skill={'Angular'} porcentage={60}/>
          <ProgressBar skill={'Rxs'} porcentage={70}/>
          </div>
        </div>

      </section>

      <section className='app__contact-section'>
        <div className='app__contact-section__title'>
          <h1>
            LET’S WORK <br/>
            TOGETHER~
          </h1>
          <h2>
            ~ 춤비, 시착 ~ Chumbi, Si chak  
          </h2>
          <p>
            If you want to build an amazing <br/>
            project drop me a line!
          </p>
          <span>
            {'</end>_'}
          </span>
        </div>
        <div lassName='app__contact-section__form-container'>
         

        </div>
      </section>
    </div>
    
  );
}

export default App;
