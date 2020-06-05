import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import IProject from '../../interfaces/IProject';
import IProjectImage from '../../interfaces/IProjectImage';

function ProjectTile({ project, basicRoute }: { project: IProject, basicRoute: string }) {
    return (
        <Link className="project-tile" to={`${basicRoute}/${project._id}`}>
            <img src={(project.images as IProjectImage[])[0].url} className="project-tile-preview-img" alt="preview" />
            <div className="project-tile-preview">
                <p>{project.title} </p>
            </div>
        </Link>
    );
}

export default ProjectTile;
