import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import Solnergy from '../assets/images/Solnergy png.png'

const Header = (props) => {



  return (
    <div className='main-page animation'>
       <div className="header">
              <div className="logo"><img src={Solnergy} width={118.5}></img></div>

              

              <div className="nav">
              <li><Link to="/" className='link active'>Home</Link></li>
              <li><Link to='/about' className='link'>About</Link></li>
              <li><Link to='/projects' className='link'>Projects</Link></li>
              <li><Link to='/contact' className='link contact'>Contact Us</Link></li>
              </div> 
          </div>
          <div className="word">
            {props.note}
          </div>

          <div className="explore-btn">
            <Link className='explore' to='/products'>Explore our Solutions</Link>
          </div> 

          <div className="mobile-explore-btn">
          <Link className='explore' to='/products'>Explore our Solutions</Link>
          </div>
    </div>
  )
}

export default Header
