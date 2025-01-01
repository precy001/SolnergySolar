import './styles/home.css'
import Card from './components/Card'
import SolarFuture from './components/SolarFuture'
import Contactsolar from './components/Contactsolar'
import Footer from './components/Footer'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Solnergy from './assets/images/Solnergy png.png'

function App() {
  const detail1 = "Power your home or business sustainably by harnessing the sun's energy with our reliable solar installation services."
  const detail2 = "Ensure peak performance and longevity of your solar system with our expert maintenance and support services."
  const detail3 = "Get expert guidance on solar solutions tailored to your needs with our professional consultation services."
  const detail4 = "Experience reliable and efficient cable services, ensuring seamless connectivity and optimal performance for your electrical systems."

  const headerNote = `Reliable and efficient solar energy 
          solutions, powering a 
          sustainable future.`

    const menuBtn = useRef(null)
    const mobileMenu = useRef(null)
  
    const handleMenuClick = () => {
      menuBtn.current.classList.toggle('is-active')
      mobileMenu.current.classList.toggle('is-active')
    }

  return (
    <>
      <div className="header-container">
          <div className='main-page'>
                 <div className="header">
                        <div className="logo"><img src={Solnergy} width={118.5}></img></div>
          
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
                        <li><Link to="/" className='link active'>Home</Link></li>
                        <li><Link to='/about' className='link'>About</Link></li>
                        <li><Link to='/projects' className='link'>Projects</Link></li>
                        <li><Link to='/contact' className='link contact'>Contact Us</Link></li>
                        </div> 
                    </div>
                    <div className="word">
                      {headerNote}
                    </div>
          
                    <div className="explore-btn">
                      <Link className='explore' to='/products'>Explore our Solutions</Link>
                    </div> 
          
                    <div className="mobile-explore-btn">
                    <Link className='explore' to='/products'>Explore our Solutions</Link>
                    </div>
              </div>
      </div>

      <div className="expertise">
        <div className="title expertise-green">Our expertise and experience</div>
        <div className="card-container">
          <Card styleName="second-card" title="Solar Installation" detail={detail1}/>
          <Card styleName="first-card" title="Solar Maintenance" detail={detail2}/>
          <Card styleName="third-card" title="Consultation" detail={detail3}/>
          <Card styleName="fourth-card" title="Cable services" detail={detail4}/> 
        </div>
       
      </div>

      <div className="solar-future">
        <SolarFuture />
      </div>

      <div className="contact-solar">
        <Contactsolar />
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </>
  )
}

export default App
