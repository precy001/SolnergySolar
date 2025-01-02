import React from 'react'


const Values = (props) => {
  return (
    <div>
        <div className="each-value">
        <img src={props.icon} width={30} height={30} className='section-icon'/>
            <div className="section-title">{props.head}</div>
            <div className="content">{props.text}</div>
        </div>
    </div>
  )
}

export default Values