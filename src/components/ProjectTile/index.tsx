/**
 * External dependencies.
 */
import React from 'react';
import { Link } from 'react-router-dom';


/**
 * Internal dependencies.
 */
import IProjectTile from '../../interfaces/IProjectTile';

import './styles.css';

function ProjectTile({ project, basicRoute }: IProjectTile) {
    return (
        <Link className="project-tile" to={`${basicRoute}/${project._id}`}>
            <img src={(project.images)[0].url} className="project-tile-preview-img" alt="preview" />
            <div className="project-tile-text-wrapper">
                <p className="project-tile-preview-text">{project.title}</p>
            </div>
        </Link>
    );
}

export default ProjectTile;
