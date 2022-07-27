import React from 'react'
import './About.css'
import Image from "../../assets/avatar-2.svg"

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus fugit atque odit sed laboriosam. Sr dolorum? Maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolores?</p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about__skills gird">
            <div className="skills__data">
              <div className="skills__titles">
                <div className="skills__name">HTML5</div>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <div className="skills__name">CSS3</div>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <div className="skills__name">JAVASCRIPT</div>
                <span className="skills__number">65%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>
            
            <div className="skills__data">
              <div className="skills__titles">
                <div className="skills__name">BOOTSTRAP</div>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <div className="skills__name">REACT JS</div>
                <span className="skills__number">50%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <div className="skills__name">AFTER EFFECTS</div>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}

export default About