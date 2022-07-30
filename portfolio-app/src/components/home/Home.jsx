import React, {useEffect} from 'react'
import './Home.css'
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Typewriter from 'typewriter-effect'
import AOS from 'aos'
import "aos/dist/aos.css";


const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="home container" id="home" data-aos={"fade-up"} data-aos-duration={1000} data-aos-offset={10}>
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