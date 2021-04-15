import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../images/profile.jpg' 

export default function About() {


  return <section>
    <div className="about-section">
      <div className="about-me">
        <p className="about-me-info">I am a Junior Full-Stack Software Developer with experience as an Advertising Agency Producer where I worked in both London and New York running big Digital and TV campaigns.</p>
        <button  className="back-button" id="about-back"><Link to={'/'}><h1 className="back-button" id="about-back-text">✕</h1></Link></button>
      </div>
      <img className="profile-pic" src={`/${profile}`}/>
      <p className="about-email">aldersonnatasha@gmail.com</p>
      <p className="skills">JavaScript | ReactJS | HTML5 | CSS | SCSS | Python | Flask | Express | Node.js | Mongoose | MongoDB | Git | Github | Jest | Mocha | <br></br>Chai | pytest | ProgresSQL | Babel | Chrome | Heroku | NPM | Safari | Visual Studio Code | SSH | SQLAlchemy | React-Testing-Library</p>
    </div>
  </section>
}