import React from "react";
import './project.css'

export default class Project extends React.Component {

    render() {
        const {backgroundImage, projectName, projectLink} = this.props

        return(
            <div className="project" style={{backgroundImage: `url(${backgroundImage})`}}>
                <a href={projectLink}>
                    <div className="project-content">
                        <span>{projectName}</span>
                    </div>
                </a>
            </div>
        )
    }

}