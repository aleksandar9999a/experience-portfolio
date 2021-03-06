/**
 * External dependencies.
 */
import React, { useState, useEffect } from 'react';
import { Plus } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

/**
 * Internal dependencies.
 */
import IProject from '../../interfaces/IProject';
import ProjectTile from '../../components/ProjectTile';
import LoadingPage from '../LoadingPage';
import { getAuthProjects } from '../../services';

import './styles.css';


function ProjectsSettings() {
    let [projects, setProjects] = useState<IProject[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getAuthProjects()
            .then(setProjects)
            .catch(console.error)
            .finally(() => setIsLoading(false));
    }, [])

    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <div className="container">
            <div className="title">
                <h1>Projects</h1>
            </div>
            <div className="projects-form">
                <div className="projects-tiles">
                    {projects.map(project => {
                        return <div key={project._id} className="project-wrapper">
                            <ProjectTile project={project} basicRoute="/settings/projects" />
                        </div>
                    })}
                    <Link className="projects-tile" to="/settings/projects/createProject">
                        <Plus className="projects-add-icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectsSettings;
