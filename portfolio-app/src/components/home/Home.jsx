import React from 'react'
import './Home.css'
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">
        <Typewriter onInit={(typewriter)=>{
            typewriter.typeString(`Muhammad Ashir`).start()
          }} />
        </h1>
        <span className="home__education" >
          <Typewriter onInit={(typewriter)=>{
            typewriter.typeString(`I'm a Front-End Developer & Video Editor`).start()
          }} />
         
        </span>

        <HeaderSocials/>

        <a href="#contact" id="btn" className='btn'>Hire Me</a>

        
      <ScrollDown/>
      </div>

    </section>
  )
}

export default Home