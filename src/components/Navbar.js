import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [about, updateAbout] = useState(false)
  const [web, updateWeb] = useState(false)
  const [advert, updateAdvert] = useState(false)

  function reload() { 
    if (window.location.href === 'https://natasha-alderson.com/about-me/') {
      updateAbout(true)
      updateWeb(false)
      updateAdvert(false)
    } else if (window.location.href === 'https://natasha-alderson.com/web-development/') {
      updateWeb(true)
      updateAbout(false)
      updateAdvert(false)
    } else if (window.location.href === 'https://natasha-alderson.com/advertising/') {
      updateAdvert(true)
      updateAbout(false)
      updateWeb(false)
    } else {
      updateAdvert(false)
      updateAbout(false)
      updateWeb(false)
    }
  }
  console.log(window.location.href)

  return <section className="navbar">
    <div className="nav-div">
      <button onClick={reload} className={about ? 'nav-buttons dark' : 'nav-buttons'} id="about-nav-button"><Link to={'/about-me/'}><p className="nav-text">ABOUT</p></Link></button>
      <button onClick={reload} className={web ? 'nav-buttons dark' : 'nav-buttons'} id="web-nav-button"><Link to={'/web-development/'}><p className="nav-text">DEVELOPMENT</p></Link></button>
      <button onClick={reload} className={advert ? 'nav-buttons dark' : 'nav-buttons'} id="ad-nav-button"><Link to={'/advertising/'}><p className="nav-text">ADVERTISING</p></Link></button>
    </div>
  </section>
}