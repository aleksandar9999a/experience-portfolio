import React from 'react';
import './Settings.css';

function SkillsSettings() {
    return (
        <div className="settings-title-wrapper">
            <h1 className="settings-title">Skills</h1>
            <form className="contact-form">
                <textarea className="custom-textarea" placeholder="Skills Resume" />
                <div className="settings-submit-button-wrapper">
                    <button className="settings-submit-button">Update Skills</button>
                </div>
            </form>
        </div>
    );
}

export default SkillsSettings;
