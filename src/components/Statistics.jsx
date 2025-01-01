import React from 'react'
import { Link } from 'react-router-dom'

const Statistics = () => {
  return (
    <center>
    <div className='statistics'>
        <div className="overall-container">
            <div className="statistics-container">
                <div className="number">
                    50
                </div>

                <div className="stats">
                    Cities
                </div>
            </div>
            <div className="statistics-container">
            <div className="number">
                    700
                </div>

                <div className="stats">
                    Projects
                </div>
            </div>
            <div className="statistics-container">
            <div className="number">
                    200
                </div>

                <div className="stats">
                    Companies
                </div>
            </div>
        </div>
    </div>
    <div className="stats-contact-btn-container">
            <Link to='/contact' className='stats-contact-btn'>Connect With Us</Link>
       </div>
    </center>
  )
}

export default Statistics