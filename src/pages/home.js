import React from 'react'
import 'normalize.css'
import './home.css'
import Header from '../components/header'
import Footer from '../components/footer'
import Project from '../components/project'
import projects from '../../data/projects.json'

const gerarImageURL = "https://i.rar.vg/XXjKAHEUbi5scUeAXGFJqLbZZCR4x2L8.png"

export default class Home extends React.Component {
  render() {
    return(
      <>
      <Header />
      <section id="about" className="site-content">
        <div className="about-section">
          <div className="desc-text">
            <p className="texts-large">
              I'm a freelance developer with 7 years of coding experience, including front-end and back-end development for applications and the web.
            </p>
            <p className="texts-large">
              Some of my projects combine both UI design, as well as functionality in languages extending from Dart, JavaScript, PHP or Java.
            </p>
          </div>
          <div className="gerar-photo">
              <img src={gerarImageURL}/>
            </div>
        </div>
      </section>
      <section id="proyects" className="projects">
        {
          projects.map((project, key) => (
            <Project key={key} backgroundImage={project.projectImage} projectName={project.projectName} projectLink={project.projectLink} />
          ))
        }
      </section>
      <section>
        
      </section>
      <Footer/>
      </>
    )
  }
}