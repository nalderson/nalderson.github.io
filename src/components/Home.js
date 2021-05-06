import React from 'react'
import peace from '../images/PEACE.png'

export default function Home() {
  return <section className="homepage">
    <div className="name-title-email">
      <h1 className="nat">NATASHA<br></br>ALDERSON</h1>
      <h2 className="title-email">-<br></br>Jr. Full-Stack <br></br>Developer/Producer<br></br>aldersonnatasha<br></br>@gmail.com</h2>
      <div className="footer">
        <p className="web-design-dev">Website designed & developed by me</p>
        <img className="peace" src={`/${peace}`}></img>
      </div>
    </div>
  </section>
}
