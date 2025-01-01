import React from 'react'
import Section from './Section'
const content1 = "Switching to solar reduces electricity expenses, letting you save money while enjoying sustainable energy."
const content2 = "Solar power minimizes environmental impact, providing a greener solution for homes and businesses to fight climate change."
const content3 = "Solar energy helps you avoid rising electricity costs, offering predictable, lower monthly energy expenses for years to come."
const content4 = "With solar and battery solutions, enjoy consistent energy supply even during outages or grid failures."

const SolarFuture = () => {
  return (
    <div className='main'>
       <div className="title section-title-media">Powering a brighter tomorrow with clean,<br /> sustainable energy.</div>
            <div className='short-note section-note'>Our mission is to make energy affordable and accessible to all, driving innovation and sustainability to<br /> create a healthier planets for future generations.
            </div>            
       <div className="section-container">
        <Section icon="src\assets\icons\save.png" heading="Save More, Spend Less" content={content1}/>
        <Section icon="src\assets\icons\power.png" heading="Clean Energy, Bright Future" content={content2}/>
        <Section icon="src\assets\icons\freedom.png" heading="Freedom from High Bills" content={content3}/>
        <Section icon="src\assets\icons\reliable.png" heading="Reliable Power, Anytime" content={content4}/>
       </div>
    </div>
  )
}

export default SolarFuture