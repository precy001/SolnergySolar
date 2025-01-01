import React from 'react'

const Card = (props) => {
  return (
    <div className={props.styleName}>
        <div className="expertise-title">{props.title}</div>
        <div className="details">{props.detail}</div>
    </div>
  )
}

export default Card