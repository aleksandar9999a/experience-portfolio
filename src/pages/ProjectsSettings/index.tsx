import React from 'react';
import './styles.css';

function ProjectsSettings() {
    return (
        <div className="projects-settings-title-wrapper">
            <h1 className="projects-settings-title">Projects</h1>
            <form className="projects-form">
                <div className="projects-settings-submit-button-wrapper">
                    <button className="projects-settings-submit-button">Update Projects</button>
                </div>
            </form>
        </div>
    );
}

export default ProjectsSettings;
