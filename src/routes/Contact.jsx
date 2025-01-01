import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import '../styles/contact.css'


const Contact = () => {

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
              <div className="logo"><img src="src\assets\images\Solnergy png.png" width={118.5}></img></div>

             <button class="hamburger" ref={menuBtn}onClick={handleMenuClick}>
                                        <div class="bar"></div>
                                    </button>
                                    <div class="mobile-nav" ref={mobileMenu}>
                                        <button><a href="">Home</a></button>
                                        <button><Link to='/about'>About</Link></button>
                                        <button><Link to='/projects'>Projects</Link></button>
                                        <button><Link to='/contact'>Contact Us</Link></button>
                                    </div>

              <div className="nav">
              <li><Link to="/" className='link'>Home</Link></li>
              <li><Link to='/about' className='link'>About</Link></li>
              <li><Link to='/projects' className='link'>Projects</Link></li>
              <li><Link to='/contact' className='link contact active-contact'>Contact Us</Link></li>
              </div> 
          </div>
          <div className="word-about">
          Contact us
          <div className='small'>Solnergy inc.</div>
          </div>
    </div>

    <div className="title contact-tit">
      Power Up Your Future With Our<br /> Energy Solutions
      </div>
      <div className="contact-form-container">
        <ContactForm />
      </div>

      
    </div>
  )
}

export default Contact