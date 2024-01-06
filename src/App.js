import './App.scss';

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
            I’m interested in web & mobile application 
            development, accessibility, make end2end 
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
        

     
      </section>
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
    </div>
    
  );
}

export default App;
