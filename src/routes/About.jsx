import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import Values from '../components/Values'
import '../styles/about.css'
import Footer from '../components/Footer'
import TheTeam from '../components/TheTeam'
import sustainability from '../assets/icons/sustainability.png'
import innovation from '../assets/icons/innovation.png'
import customerCare from '../assets/icons/customer-care.png'


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
              <div className="logo"><img src="/assets/IMG_0830.png" alt="TDV Global logo" /></div>

                 <button class="hamburger" ref={menuBtn}onClick={handleMenuClick}>
                            <div class="bar"></div>
                        </button>
                        <div class="mobile-nav" ref={mobileMenu}>
                            <button><Link to="/">Home</Link></button>
                            <button><Link to='/about'>About</Link></button>
                            <button><Link to='/products'>Products</Link></button>
                            <button><Link to='/projects'>Projects</Link></button>
                            <button><Link to='/contact'>Contact Us</Link></button>
                        </div>

              <div className="nav">
              <li><Link to="/" className='link'>Home</Link></li>
              <li><Link to='/about' className='link active'>About</Link></li>
              <li><Link to='/products' className='link'>Products</Link></li>
              <li><Link to='/projects' className='link'>Projects</Link></li>
              <li><Link to='/contact' className='link contact'>Contact Us</Link></li>
              </div> 
          </div>
          <div className="word-about">
          About us
          <div className='small'>TDV Global inc.</div>
          </div>
    </div>

    <div className="about">
      <div className="title about-note-title">Providing a Sustainable<br /> Future</div>
      <div className="about-note">
      <div className="paragraph">
      TDV Global is a Nigerian energy company built around one simple idea. Power should be something you stop thinking about.
      </div>

      <div className="paragraph">
      We design, supply, install and maintain solar and inverter systems for homes, businesses and institutions. Our work covers everything from a modest home backup to full commercial installations, and every project starts the same way, by understanding what the customer actually needs rather than what is easiest to sell.
      </div>

     <div className="paragraph">
     Too many people have paid good money for a system that never performed as promised. Undersized panels, batteries that failed within months, installers who stopped answering calls. We built this company to be the opposite of that experience. We size systems properly, we use equipment that carries genuine warranty cover, we install to standard, and we stay reachable long after the work is finished.
     </div>

     <div className="paragraph">
     If you are considering solar, we are happy to talk it through with you, whether you buy from us or not.
     </div>
      </div>
    </div>

    <div className="values">
      <div className="title values-title">
        Our Values
      </div>

      <div className="values-container">
        <Values icon={sustainability} text="We design every system to make the most of clean, renewable energy, cutting reliance on the grid and on diesel." head="Sustainability"/>

        <Values icon={innovation} text="We stay on top of new equipment and techniques so the systems we build keep getting safer, more efficient and easier to maintain." head="Innovation"/>

        <Values icon={customerCare} text="We treat every enquiry the way we would want to be treated ourselves, with honest advice, fair pricing and support that does not disappear after installation." head="Customer Care"/>
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