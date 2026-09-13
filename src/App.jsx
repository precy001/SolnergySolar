import './styles/home.css'
import Card from './components/Card'
import SolarFuture from './components/SolarFuture'
import Contactsolar from './components/Contactsolar'
import Footer from './components/Footer'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const detail1 = "We design and install solar systems sized around what you actually use, so your home or business runs on clean, dependable power from day one."
  const detail2 = "Regular servicing, fault finding and battery checks keep your system performing the way it should for as long as you own it."
  const detail3 = "Not sure what size system you need? We walk through your appliances and your budget with you and recommend a setup that actually fits."
  const detail4 = "Neat, safe cabling and electrical work that protects your equipment and keeps your installation looking as good as it performs."

  const headline = "Power that stays on."
  const heroSub = "Solar and inverter systems designed, installed and supported by people you can still reach after the work is done."

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
                        <div className="logo"><img src="/assets/IMG_0830.png" alt="TDV Global logo" /></div>
          
                        <button class="hamburger" ref={menuBtn}onClick={handleMenuClick}>
                          <div class="bar"></div>
                      </button>
                      <div class="mobile-nav" ref={mobileMenu}>
                          <button><a href="">Home</a></button>
                          <button><Link to='/about'>About</Link></button>
                          <button><Link to='/products'>Products</Link></button>
                          <button><Link to='/projects'>Projects</Link></button>
                          <button><Link to='/contact'>Contact Us</Link></button>
                      </div>
          
                        <div className="nav">
                        <li><Link to="/" className='link active'>Home</Link></li>
                        <li><Link to='/about' className='link'>About</Link></li>
                        <li><Link to='/products' className='link'>Products</Link></li>
                        <li><Link to='/projects' className='link'>Projects</Link></li>
                        <li><Link to='/contact' className='link contact'>Contact Us</Link></li>
                        </div> 
                    </div>
                    <div className="word">
                      {headline}
                      <div className="hero-subtext">{heroSub}</div>
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
