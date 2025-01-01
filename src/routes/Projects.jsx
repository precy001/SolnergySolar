import React, {useRef} from 'react'
import Solnergy from '../assets/images/Solnergy png.png'
import { Link } from 'react-router-dom'
import '../styles/projects.css'
import ProjectsCard from '../components/ProjectsCard'
import Statistics from '../components/Statistics'
import Footer from '../components/Footer'

const Projects = () => {   
  
      const menuBtn = useRef(null)
      const mobileMenu = useRef(null)
    
      const handleMenuClick = () => {
        menuBtn.current.classList.toggle('is-active')
        mobileMenu.current.classList.toggle('is-active')
      }
  
  return (
    <div>
               <div className='main-page'>
       <div className="header">
              <div className="logo"><img src={Solnergy} width={118.5}></img></div>

             <button class="hamburger" ref={menuBtn}onClick={handleMenuClick}>
                                        <div class="bar"></div>
                                    </button>
                                    <div class="mobile-nav" ref={mobileMenu}>
                                        <button><Link to="/">Home</Link></button>
                                        <button><Link to='/about'>About</Link></button>
                                        <button><Link to='/projects'>Projects</Link></button>
                                        <button><Link to='/contact'>Contact Us</Link></button>
                                    </div>

              <div className="nav">
              <li><Link to="/" className='link'>Home</Link></li>
              <li><Link to='/about' className='link'>About</Link></li>
              <li><Link to='/projects' className='link active'>Projects</Link></li>
              <li><Link to='/contact' className='link contact'>Contact Us</Link></li>
              </div> 
          </div>
          <div className="word-about">
         Our Projects
          <div className='small'>Solnergy inc.</div>
          </div>
    </div>

    <div className="projects">
        <div className="title featured-projects-title">Featured Projects</div>
        <div className="featured-projects-note">
        Discover how we’re powering homes and businesses with clean, sustainable solar energy. Each project reflects our commitment to quality and a greener future.
        </div>
    </div>

        <div className="projects-card-container">
        <ProjectsCard styleName="first-project-card" title="Solar Installation at Wolex inc." detail="Successfully delivered a custom solar energy solution, providing sustainable, efficient, and reliable power to support Wolex Inc."/>
        <ProjectsCard styleName="second-project-card" title="Maintenence work at 5 star hotel" detail="Provided comprehensive maintenance services for the hotel’s solar energy system, ensuring peak efficiency and uninterrupted power supply."/>
        <ProjectsCard styleName="fourth-project-card" title="Cable service at Vought" detail="Executed professional cable installation and optimization services, ensuring seamless connectivity and reliable performance for Vought's solar systems."/>
        </div>

    <Statistics />

    <Footer />
    </div>
  )
}

export default Projects