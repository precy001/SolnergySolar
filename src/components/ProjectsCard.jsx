import React from 'react'

const ProjectsCard = (props) => {
  return (
    <div>
        <div className={props.styleName}>
        <div className="project-title">{props.title}</div>
        <div className="project-detail">{props.detail}</div>
        </div>
    </div>
  )
}

export default ProjectsCard