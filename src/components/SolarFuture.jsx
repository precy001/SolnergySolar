import React from 'react'
import Section from './Section'
import save from '../assets/icons/save.png'
import power from '../assets/icons/power.png'
import freedom from '../assets/icons/freedom.png'
import reliable from '../assets/icons/reliable.png'

const SolarFuture = () => {
  const content1 = "Switching to solar reduces electricity expenses, letting you save money while enjoying sustainable energy."
const content2 = "Solar power minimizes environmental impact, providing a greener solution for homes and businesses to fight climate change."
const content3 = "Solar energy helps you avoid rising electricity costs, offering predictable, lower monthly energy expenses for years to come."
const content4 = "With solar and battery solutions, enjoy consistent energy supply even during outages or grid failures."
  return (
    <div className='main'>
       <div className="title section-title-media">Powering a brighter tomorrow with clean,<br /> sustainable energy.</div>
            <div className='short-note section-note'>Our mission is to make energy affordable and accessible to all, driving innovation and sustainability to<br /> create a healthier planets for future generations.
            </div>            
       <div className="section-container">
        <Section icon={save} heading="Save More, Spend Less" content={content1}/>
        <Section icon={power} heading="Clean Energy, Bright Future" content={content2}/>
        <Section icon={freedom} heading="Freedom from High Bills" content={content3}/>
        <Section icon={reliable} heading="Reliable Power, Anytime" content={content4}/>
       </div>
    </div>
  )
}

export default SolarFuture