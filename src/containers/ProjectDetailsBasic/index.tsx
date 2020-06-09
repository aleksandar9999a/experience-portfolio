import React from 'react';
import IProject from "../../interfaces/IProject";
import './styles.css';
import Slideshow from '../../components/Slideshow';

function ProjectDetailsBasic({ title, description, images, link }: IProject) {
    return ( 
        <div className="project-details-wrapper">
            <div className="project-details-title">
                <h1 className="project-details-title-text">{title}</h1>
            </div>
            <div className="project-details-images">
                <Slideshow images={images} />
            </div>
            <div className="project-details-description">
                <p className="project-details-description-text">{description}</p>
            </div>
            <div className="project-details-link">
                <a href={link}>{link}</a>
            </div>
        </div>
    )
}

export default ProjectDetailsBasic;