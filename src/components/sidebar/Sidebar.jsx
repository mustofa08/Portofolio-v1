import React from 'react'
import "./sidebar.css"
import LogoWhite from "../../assets/logo-white.svg"
import LogoDark from "../../assets/logo-dark.svg"
import Scrollspy from 'react-scrollspy';
import ToggleTheme from '../../hooks/ToggleTheme';

const Sidebar = () => {
  return (
    <aside className='aside dark:bg-gray-900 dark:text-white'>
      <a href="#home" className="nav__logo">
          <img src={LogoDark} alt="Logo" className="block dark:hidden" />
          <img src={LogoWhite} alt="Logo" className="hidden dark:block" />
      </a>
        
      <nav className='nav'>
        <div className="nav__menu">
           <Scrollspy
            items={['home', 'about', 'resume', 'portofolio', 'contact']} 
            currentClassName="active" 
            offset={-100}
            componentTag="ul"
            className="nav__list"
            >
            <li className="nav__item">
              <a href="#home" className="nav__link text-gray-800 dark:text-white">
                <i className="icon-home text-current"></i>
              </a> 
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link text-gray-800 dark:text-white">
                <i className="icon-user text-current"></i>
              </a> 
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link text-gray-800 dark:text-white">
                <i className="icon-graduation text-current"></i>
              </a> 
            </li>

            <li className="nav__item">
              <a href="#portofolio" className="nav__link text-gray-800 dark:text-white">
                <i className="icon-layers text-current"></i>
              </a> 
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link text-gray-800 dark:text-white">
                <i className="icon-bubble text-current"></i>
              </a> 
            </li>
          </Scrollspy>
        </div>
      </nav>

      <div className="nav__footer">
        <ToggleTheme/>
        {/* <span className="copyright">2025</span> */}
      </div>
    </aside>
)
}

export default Sidebar