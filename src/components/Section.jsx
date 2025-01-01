import React from 'react'

const Section = (props) => {
  return (
    <div>
        <div className="each-section">
            <img src={props.icon} width={30} height={30} className='section-icon'/>
            <div className="section-title">{props.heading}</div>
            <div className="content">{props.content}</div>
        </div>
    </div>
  )
}

export default Section