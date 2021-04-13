import React from 'react'
import { Link } from 'react-router-dom'
import jl from '../images/EJ.png'
import ff from '../images/FamousF.png'
import amstel from '../images/Amstel.png'
import halifax from '../images/Halifax.jpg'
import sam from '../images/Samsung.png'
import google from '../images/Pixel.png'

export default function Ads() {

  return <section>
    <div className="project-section">
      <div className="header">
        <h1 className="projects">CAMPAIGNS</h1>
        <button className="back-button" id="ad-back"><Link to={'/'}><h1 className="back-button">✕</h1></Link></button>
      </div>
      <div className="individual-project">
        <h2 className="project-title">John Lewis Christmas</h2>
        <img className="project-img" src={`/${jl}`}/>
        <p className="project-description">Was the Assistant Producer on the main TVC and Producer for the x8 Supplier funded TVC ads, Behind the Scenes, In Store installation and all Social, Digital, Print and Radio assets.
        </p>
        <h4 className="tech-used">MEDIA</h4>
        <div className="tech-list">
          <p>TV | Digital | Social | Print | Radio | In Store Experience </p>
        </div>
        <div className="project-links">
          <a target="blank" id="project-web-link" href="https://www.adforum.com/talent/81881174-natasha-alderson/work/34588454">→Watch it here</a>
        </div>
      </div>

      <div className="individual-project">
        <h2 className="project-title" id="famous-five">Great Western Railway</h2>
        <img className="project-img" src={`/${ff}`}/>
        <p className="project-description">Produced the main TVC and ITV Weather Idents for Great Western Railway’s new train launch.
        </p>
        <h4 className="tech-used">MEDIA</h4>
        <div className="tech-list">
          <p>TV | Digital | Social | Radio</p>
        </div>
        <div className="project-links">
          <a target="blank" id="project-web-link" href="https://www.youtube.com/watch?v=2sQvlBPFZgE">→Watch it here</a>
        </div>
      </div>

      <div className="individual-project">
        <h2 className="project-title">Amstel</h2>
        <img className="project-img" src={amstel}/>
        <p className="project-description">Was the Assistant Producer on the main TVC and Producer for all social and digital ads.
        </p>
        <h4 className="tech-used">MEDIA</h4>
        <div className="tech-list">
          <p>TV | Digital | Social | Print </p>
        </div>
        <div className="project-links">
          <a target="blank" id="project-web-link" href="https://www.youtube.com/watch?v=Vdf_XybtFjU">→Watch it here</a>
        </div>
      </div>

      <div className="individual-project">
        <h2 className="project-title">Halifax</h2>
        <img className="project-img" src={halifax}/>
        <p className="project-description">Led a 9 month project implementing Dynamic Banners to streamline Halifax’s Digital Display advertising. Off the back of this project, I was sent to the New York office to manage a similar piece for our Samsung client (please see below).
        </p>
        <h4 className="tech-used">MEDIA</h4>
        <div className="tech-list">
          <p>Digital</p>
        </div>
      </div>

      <div className="individual-project">
        <h2 className="project-title" id="samsung-title">Samsung</h2>
        <img className="project-img" src={sam}/>
        <p className="project-description">Worked on the Samsung account in the adam&eve New York office streamlining their OLA, along with producing Social, Radio and Print ads.
        </p>
        <h4 className="tech-used">MEDIA</h4>
        <div className="tech-list">
          <p>Digital | Social | Radio | Print</p>
        </div>
      </div>

      <div className="individual-project">
        <h2 className="project-title" id="pixel-title">Google Pixel</h2>
        <img className="project-img" src={google}/>
        <p className="project-description">Was the Assistant Digital Producer on the Google Pixel phone launch, working with Droga5 to streamline all assets across Europe.
        </p>
        <h4 className="tech-used">MEDIA</h4>
        <div className="tech-list">
          <p>Digital | Social </p>
        </div>
      </div>

    </div>
  </section>
}