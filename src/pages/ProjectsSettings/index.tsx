import React from 'react';
import './styles.css';
import { Plus } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

function ProjectsSettings() {
    return (
        <div className="projects-settings-title-wrapper">
            <h1 className="projects-settings-title">Projects</h1>
            <div className="projects-form">
                <div className="projetcs-tiles">
                    <Link className="projects-tile" to="/settings/projects/createProject">
                        <Plus className="projects-add-icon"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectsSettings;
