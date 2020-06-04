import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import IRProject from '../../interfaces/IRProject';

function ProjectTile({ project }: { project: IRProject }) {
    return (
        <Link className="project-tile" to={`projects/details/${project._id}`}>
            <img src={project.images[0].url} className="project-tile-preview-img" alt="preview" />
            <div className="project-tile-preview">
                <p>{project.title} </p>
            </div>
        </Link>
    );
}

export default ProjectTile;
