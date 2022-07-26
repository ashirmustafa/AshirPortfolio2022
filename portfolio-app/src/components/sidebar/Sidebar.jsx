import React, {useEffect} from 'react'
import './Sidebar.css'
import Logo from '../../assets/logo.svg';
import AOS from 'aos'
import "aos/dist/aos.css";


const Sidebar = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <aside className='aside' data-aos={"fade-right"} data-aos-duration={1000} data-aos-offset={10}>
      <a href='#home' className='nav__logo'>
        <img src={Logo} alt="" />
      </a>

      <nav className='nav'>
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href="#home" className="nav__link">
                <i className='icon-home'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="" className="nav__link">
                <i className='icon-user-following'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#about" className="nav__link">
                <i className='icon-briefcase'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#resume" className="nav__link">
                <i className='icon-graduation'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#portfolio" className="nav__link">
                <i className='icon-layers'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#blog" className="nav__link">
                <i className='icon-notes'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href="#contact" className="nav__link">
                <i className='icon-bubble'></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">Copyright 2022</span>
      </div>
    </aside>
  )
}

export default Sidebar