import React from 'react'
import { Link } from 'react-router-dom'
import picster from '../images/picster.png'
import city from '../images/city1.png'
import film from '../images/film.png'
import snake from '../images/snake.png'

export default function Web() {

  return <section>
    <div className="project-section">
      <div className="header">
        <h1 className="projects">PROJECTS</h1>
        <button className="back-button" id="web-back"><Link to={'/'}><h1 className="back-button">✕</h1></Link></button>
      </div>
      <div className="individual-project">
        <h2 className="project-title">Picster</h2>
        <img className="project-img" src={`/${picster}`}/>
        <p className="project-description">Picster is a social imaging editing app, where users can edit and post their photos. It is a full stack application built with Python for the backend and has a frontend built with React.
        This was a 5 day group project, in groups of x3. In terms of backend, I focused on building the User Model, User Schema and User Data, as well as the Comment Controllers.
        Additionally, I developed a test suite using the pytest framework, to ensure our comment endpoints correctly returned the expected response. For the front-end, I focused mainly on
        the ‘My Profile’ page and the ‘Individual Photo’ page, which allowed users to comment and also follow each other.
        </p>
        <h4 className="tech-used">TECH USED</h4>
        <div className="tech-list">
          <p>ReactJS | SCSS | Python | Flask | Git | Github | pytest | Babel | Chrome | Heroku | NPM | Safari | Visual Studio Code</p>
        </div>
        <div className="project-links">
          <a target="blank" id="project-web-link" href="https://picster-project4.herokuapp.com/">→View Site</a>
          <a target="blank" id="project-git-link" href="https://github.com/nalderson/project-4/blob/master/README.md">→View Github</a>
        </div>
      </div>
      <div className="individual-project">
        <h2 className="project-title" id="city-title">Cityscapes</h2>
        <img className="project-img" src={`/${city}`}/>
        <p className="project-description">Built a MERN-stack application integrating a number of third party APIs. In terms of backend, I focused on the Models of which we had x3: ‘user’, ‘city’ and ‘image’ and additionally built our City Data. For the frontend, I took ownership of the ‘Flight Search’ page and ‘Flight Results’ page integrating the SkyScanner API, into a custom React frontend which allowed users to search for the best price flight option for their chosen dates/destination etc. Throughout the build, I project managed the team, including planning and task allocation. </p>
        <h4 className="tech-used">TECH USED</h4>
        <div className="tech-list">
          <p>ReactJS | SCSS | Express | Node.js | Mongoose | MongoDB | Git | Github | Babel | Chrome | Heroku | NPM | Visual Studio Code |<br></br> React-Testing-Library</p>
        </div>
        <div className="project-links">
          <a target="blank" id="project-web-link" href="https://cityscapes-natasha.herokuapp.com/">→View Site</a>
          <a target="blank" id="project-git-link" href="https://github.com/nalderson/project-3/blob/main/README.md">→View Github</a>
        </div>
      </div>
      <div className="individual-project">
        <h2 className="project-title">Film Finder</h2>
        <img className="project-img" src={`/${film}`}/>
        <p className="project-description">
          Integrated a third party API (The Movie DB) into a JavaScript React frontend app. Created a vivid user experience where you can find films by title and browse through The Movie DB’s popular films.
        </p>
        <h4 className="tech-used">TECH USED</h4>
        <div className="tech-list">
          <p>ReactJS | SCSS | Express | Node.js | Git | Github | Babel | Chrome | NPM | Visual Studio Code</p>
        </div>
        <div className="project-links">
          <a target="blank" id="project-web-link" href="https://nalderson.github.io/project-2/">→View Site</a>
          <a target="blank" id="project-git-link" href="https://github.com/nalderson/project-2/blob/main/README.md">→View Github</a>
        </div>
      </div>

      <div className="individual-project">
        <h2 className="project-title">Snake</h2>
        <img className="project-img" src={`/${snake}`}/>
        <p className="project-description">
          The brief was to build a grid based game using vanilla JavaScript, CSS and HTML5, for which I chose to build Snake. I kept the styling retro, in keeping with the original game.
        </p>
        <h4 className="tech-used">TECH USED</h4>
        <div className="tech-list">
          <p>JavaScript | ReactJS | HTML5 | CSS | Git | Github | Chrome | Visual Studio Code</p>
        </div>
        <div className="project-links">
          <a target="blank" id="project-web-link" href="https://nalderson.github.io/project-1/">→View Site</a>
          <a target="blank" id="project-git-link" href="https://github.com/nalderson/project-1/blob/main/README.md">→View Github</a>
        </div>
      </div>
    </div>
  </section>
}