import React from 'react'
import { Link } from 'react-router-dom'

const Contactsolar = () => {
  return (
    <div className='all-container'>
        <div className="background-container">
            <div className="texts">
                <div className="head-text">
                    Ready to harness the power of the sun?<br /> Connect with us now!
                </div>

                <div className="small-text">
                Take the leap toward a brighter future! Contact us today for a free consultation and discover how renewable energy can transform <br></br>your home or business while saving you money.
                </div>

                <div className="contact-btn-container">
                <Link to='/contact' className='contact-btn'>Connect With Us</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contactsolar