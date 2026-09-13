import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import '../styles/products.css'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

const Products = () => {

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
              <li><Link to='/about' className='link'>About</Link></li>
              <li><Link to='/products' className='link active'>Products</Link></li>
              <li><Link to='/projects' className='link'>Projects</Link></li>
              <li><Link to='/contact' className='link contact'>Contact Us</Link></li>
              </div> 
          </div>
          <div className="word-about">
          Our Products
          <div className='small'>TDV Global inc.</div>
          </div>
    </div>

    <div className="products-intro">
      <div className="title products-intro-title">Equipment You Can Rely On</div>
      <div className="products-intro-note">
      We supply genuine solar and power equipment backed by real warranties. Here is a look at some of what we currently stock. Do not see what you need? Get in touch and we will source it for you.
      </div>
    </div>

    <div className="products-grid">
      <ProductCard
        image="/assets/e3e20114-dd60-4a11-a4a6-cf583b811b4a.jpeg"
        secondaryImage="/assets/1aa371a6-3522-4481-a129-c766521b558f.jpeg"
        badge="100,000mAh, 320Wh, German Design Award Winner 2026"
        name="iTel Power Go Pro Portable Power Station"
        tagline="Power that lasts, all day, every day."
        description="A compact energy solution for home, office, outdoor use and everywhere in between. It delivers 200W of AC output plus 133W of DC output from a 320Wh lithium pack, so you can keep the essentials running wherever you are."
        features={[
          'Safe and reliable, with advanced BMS protection',
          'Lightweight and easy to carry',
          'Multi output, power several devices at once',
          'Long lasting, quality A+ cells inside'
        ]}
        specs={[
          { label: '65W Laptop', value: '6.8 hrs' },
          { label: '16W DC Fan', value: '20 hrs' },
          { label: '10W Bulb', value: '32 hrs' },
          { label: '6W Speaker', value: '53.3 hrs' },
          { label: '15W LED TV', value: '21.3 hrs' },
          { label: '5Ah Phone', value: '14 charges' },
        ]}
      />

      <ProductCard
        image="/assets/65ef665f-a52e-418e-98c9-0849d5bebfea.jpeg"
        badge="1kWh Battery, 590W Bifacial Panel"
        name="1kWh Solar Power System"
        tagline="Reliable power. Anytime. Anywhere."
        description="A complete starter solar package built around a 1kWh lithium battery power station and a Jinko 590W bifacial panel, model JKM590N 72HL4 BDV. Pure sine wave output keeps sensitive electronics safe, and the bifacial design pulls in extra power from light reflected onto the back of the panel."
        features={[
          'Package includes 1 x iTel 1kWh lithium battery power station',
          'Package includes 1 x Jinko 590W bifacial solar panel',
          'Rated for 4000+ charge cycles',
          'Built in protection and quiet operation',
          'Eco friendly, long life battery'
        ]}
      />
    </div>

    <div className="products-note">
      Prices vary by configuration and current stock. Message us on WhatsApp or use the contact form for a quote tailored to what you need to power.
    </div>

    <Footer />
    </div>
  )
}

export default Products
