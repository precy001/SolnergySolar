import React from 'react'
import { Link } from 'react-router-dom'
import x from '../assets/icons/x.png'
import instagram from '../assets/icons/instagram.png'
import linkedin from '../assets/icons/linkedin.png'
import facebook from '../assets/icons/facebook.png'

const Footer = () => {
  return (
    <div className='footer'>

        <div className="contains">
        <div className="logo">
            <img src="src\assets\images\Solnergy png.png" alt="" width={118.5}/>
        </div>

        <div className="small-note">
            Powering a <br /><b>Sustainable future</b>
        </div>

        <div className="explore-links">
            <div className="top">Explore</div>
            <div className="quick-links">
              <li><Link to="/" className=''>Home</Link></li>
              <li><Link to='/about' className=''>About</Link></li>
              <li><Link to='/projects' className=''>Projects</Link></li>
              <li><Link to='/contact' className=''>Contact Us</Link></li>
            </div>
        </div>

        <div className="contact-section">
            <div className="top">Connect with us</div>
            <div className="address">
                No 10, Unity crescent, Ikorodu, Lagos.
            </div>
            <div className="mail">info@solnergy.com</div>
        </div>
        </div>

        <hr className='rule'/>

        <div className="down">
        <div className="left-float">&copy; {new Date().getFullYear()} Solnergy. All rights reserved</div>

        <div className="socials">
            <a href=""><div className="social-icon"><img src={x} /></div></a>
            <a href=""><div className="social-icon"><img src={instagram} /></div></a>
            <a href=""><div className="social-icon"><img src={linkedin} /></div></a>
            <a href=""><div className="social-icon"><img src={facebook} /></div></a>
        </div>
        </div>
    </div>
  )
}

export default Footer