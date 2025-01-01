import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import Solnergy from '../assets/images/Solnergy png.png'
import Values from '../components/Values'
import '../styles/about.css'
import Footer from '../components/Footer'
import TheTeam from '../components/TheTeam'


const About = () => {

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
              <li><Link to='/about' className='link active'>About</Link></li>
              <li><Link to='/projects' className='link'>Projects</Link></li>
              <li><Link to='/contact' className='link contact'>Contact Us</Link></li>
              </div> 
          </div>
          <div className="word-about">
          About us
          <div className='small'>Solnergy inc.</div>
          </div>
    </div>

    <div className="about">
      <div className="title about-note-title">Providing a Sustainable<br /> Future</div>
      <div className="about-note">
      <div className="paragraph">
      Solnergy is a trusted provider of solar energy solutions, specializing in the design, installation, and maintenance of efficient solar systems for homes, businesses, and industries. Our goal is to help clients reduce energy costs and environmental impact through reliable, sustainable solar technology
      </div>

      <div className="paragraph">
      At Solnergy, our focus is on making clean, renewable energy accessible to all, driving a greener future while providing cost-effective solutions that empower communities and businesses to thrive.
      </div>

     <div className="paragraph">We are committed to delivering innovative solar energy solutions that promote sustainability and empower communities. With expertise in renewable energy and local markets, we provide reliable, eco-friendly power tailored to the needs of homes and businesses.
     </div>
      </div>
    </div>

    <div className="values">
      <div className="title values-title">
        Our Values
      </div>

      <div className="values-container">
        <Values icon="src\assets\icons\sustainability.png" text=" We are committed to promoting renewable energy to reduce environmental impact and create a cleaner, greener future." head="Sustainability"/>

        <Values icon="src\assets\icons\innovation.png" text="Continuously improving solar technology and solutions to provide efficient, cost-effective, and cutting-edge energy systems." head="Innovation"/>

        <Values icon="src\assets\icons\customer-care.png" text=" We prioritize customer needs by delivering tailored solar solutions, exceptional service, and long-term value." head="Customer Care"/>
      </div>
    </div>

    <div className="the team">
      <div className="title2 team-title">Meet the Team</div>
      <TheTeam />
    </div>
    <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default About