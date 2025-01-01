import React, {useRef, useState, useEffect} from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Link } from 'react-router-dom'

const TheTeam = () => {


const carouselRef = useRef(null)
const firstArrowButton = useRef(null)
const secondArrowButton = useRef(null)
const [isDragging, setIsDragging] = useState(false)
const [startX, setStartX] = useState(0)
const [startScrollLeft, setStartScrollLeft] = useState(0)
const firstCard = useRef(null)
const [firstCardWidth, setFirstCardWidth] = useState(0)

useEffect(() => {
    // Check if the element is available
    if (firstCard.current) {
      setFirstCardWidth(firstCard.current.offsetWidth); // Get the offsetWidth and store it
    }
  }, []);


const dragging = (e) => { 
    if(!isDragging){
        return;
    }
    carouselRef.current.scrollLeft = startScrollLeft - (e.pageX - startX)
}

const dragStart = (e) => {
    setIsDragging(true)
    carouselRef.current.classList.add('dragging')
    setStartX(e.pageX)
    setStartScrollLeft(carouselRef.current.scrollLeft)
}

const dragStop = () => {
    setIsDragging(false)
    carouselRef.current.classList.remove('dragging')
}

const buttonclick = (button) => {
    carouselRef.current.scrollLeft += button.current.id === "left" ? -firstCardWidth : firstCardWidth + 50
}

  return (
    <div className='team-container'>
        <div className="wrapper">
            <i id='left' className='fa-solid fa-angle-left' ref={firstArrowButton} onClick={() => buttonclick(firstArrowButton)}></i>
            <ul 
            className="carousel" 
            ref={carouselRef} 
            onMouseMove={dragging}
            onMouseDown={dragStart}
            onMouseUp={dragStop}
            >
                <li className="card" ref={firstCard}>
                    <div className="img">
                        <img src="src\assets\images\noprofile.jpeg" alt="" draggable={false}/>
                    </div>
                    <h2>John Doe</h2>
                    <span>CEO/Founder</span>
                </li>

                <li className="card">
                    <div className="img" >
                        <img src="src\assets\images\noprofile.jpeg" alt="" draggable={false}/>
                    </div>
                    <h2>Dorothy</h2>
                    <span>Project Manager</span>
                </li>

                <li className="card">
                    <div className="img" >
                        <img src="src\assets\images\noprofile.jpeg" alt="" draggable={false}/>
                    </div>
                    <h2>Deborah</h2>
                    <span>Solar Engineer</span>
                </li>

                <li className="card">
                    <div className="img" >
                        <img src="src\assets\images\noprofile.jpeg" alt="" draggable={false}/>
                    </div>
                    <h2>Joseph</h2>
                    <span>Electrician</span>
                </li>

                <li className="card">
                    <div className="img">
                        <img src="src\assets\images\noprofile.jpeg" alt="" draggable={false}/>
                    </div>
                    <h2>Timileyin</h2>
                    <span>Solar Installer</span>
                </li>

                <li className="card">
                    <div className="img" >
                        <img src="src\assets\images\noprofile.jpeg" alt="" draggable={false}/>
                    </div>
                    <h2>Esther</h2>
                    <span>Sales Representative</span>
                </li>

                <li className="card">
                    <div className="img" >
                        <img src="src\assets\images\noprofile.jpeg" alt="" draggable={false}/>
                    </div>
                    <h2>Dele</h2>
                    <span>Customer Support Representative</span>
                </li>

                <li className="card">
                    <div className="img" >
                        <img src="src\assets\images\noprofile.jpeg" alt="" draggable={false}/>
                    </div>
                    <h2>Demola</h2>
                    <span>Finance Specialist</span>
                </li>
            </ul>
            <i id='right' className='fa-solid fa-angle-right' ref={secondArrowButton} onClick={() => buttonclick(secondArrowButton)}></i>
        </div>
        
    </div>
  )
}

export default TheTeam