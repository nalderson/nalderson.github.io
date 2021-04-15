import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// https://natasha-alderson.com/web-development/
// http://localhost:8000/web-development/

export default function Navbar() {
  const [about, updateAbout] = useState(false)
  const [web, updateWeb] = useState(false)
  const [advert, updateAdvert] = useState(false)
  const [aboutColor, updateAboutColor] = useState(false)
  const [webColor, updateWebColor] = useState(false)
  const [advertColor, updateAdvertColor] = useState(false)

  function reload() { 
    if (window.location.href === 'https://natasha-alderson.com/about-me/') {
      updateAbout(true)
      updateAboutColor(true)
      updateWeb(false)
      updateWebColor(false)
      updateAdvert(false)
      updateAdvertColor(false)
    } else if (window.location.href === 'https://natasha-alderson.com/web-development/') {
      updateWeb(true)
      updateWebColor(true)
      updateAbout(false)
      updateAboutColor(false)
      updateAdvert(false)
      updateAdvertColor(false)
    } else if (window.location.href === 'https://natasha-alderson.com/advertising/') {
      updateAdvert(true)
      updateAdvertColor(true)
      updateAbout(false)
      updateAboutColor(false)
      updateWeb(false)
      updateWebColor(false)
    } else {
      updateAdvert(false)
      updateAbout(false)
      updateWeb(false)
      webColor(false)
      aboutColor(false)
      advertColor(false)
    }
  }

  return <section className="navbar">
    <div className="nav-div">
      <button onClick={reload} className={about ? 'nav-buttons dark' : 'nav-buttons'} id="about-nav-button"><Link to={'/about-me/'}><p onClick={reload} className={aboutColor ? 'nav-text click' : 'nav-text'}>ABOUT</p></Link></button>
      <button onClick={reload} className={web ? 'nav-buttons dark' : 'nav-buttons'} id="web-nav-button"><Link to={'/web-development/'}><p onClick={reload} className={webColor ? 'nav-text click' : 'nav-text'}>DEVELOPMENT</p></Link></button>
      <button onClick={reload} className={advert ? 'nav-buttons dark' : 'nav-buttons'} id="ad-nav-button"><Link to={'/advertising/'}><p onClick={reload} className={advertColor ? 'nav-text click' : 'nav-text'}>ADVERTISING</p></Link></button>
    </div>
  </section>
}