import React from 'react';
import './Settings.css';

function ProjectsSettings() {
    return (
        <div className="settings-title-wrapper">
            <h1 className="settings-title">Projects</h1>
            <form className="contact-form">
                <div className="settings-submit-button-wrapper">
                    <button className="settings-submit-button">Update Projects</button>
                </div>
            </form>
        </div>
    );
}

export default ProjectsSettings;
