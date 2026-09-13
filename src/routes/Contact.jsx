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
              <div className="logo"><img src="/assets/IMG_0830.png" alt="TDV Global logo" /></div>

             <button class="hamburger" ref={menuBtn}onClick={handleMenuClick}>
                                        <div class="bar"></div>
                                    </button>
                                    <div class="mobile-nav" ref={mobileMenu}>
                                        <button><Link to='/'>Home</Link></button>
                                        <button><Link to='/about'>About</Link></button>
                                        <button><Link to='/products'>Products</Link></button>
                                        <button><Link to='/projects'>Projects</Link></button>
                                        <button><Link to='/contact'>Contact Us</Link></button>
                                    </div>

              <div className="nav">
              <li><Link to="/" className='link'>Home</Link></li>
              <li><Link to='/about' className='link'>About</Link></li>
              <li><Link to='/products' className='link'>Products</Link></li>
              <li><Link to='/projects' className='link'>Projects</Link></li>
              <li><Link to='/contact' className='link contact active-contact'>Contact Us</Link></li>
              </div> 
          </div>
          <div className="word-about">
          Contact us
          <div className='small'>TDV Global inc.</div>
          </div>
    </div>

    <div className="title contact-tit">
      Power Up Your Future With Our<br /> Energy Solutions
      </div>
      <div className="contact-intro">
      Tell us what you need to power and we will get back to you with a straight answer. No pressure, no obligation, and no charge for the conversation.
      </div>
      <div className="contact-form-container">
        <ContactForm />
      </div>

      
    </div>
  )
}

export default Contact
