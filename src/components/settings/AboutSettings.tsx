import React from 'react';
import './Settings.css';

function AboutSettings() {
    return (
        <div className="settings-title-wrapper">
            <h1 className="settings-title">About</h1>
            <form className="contact-form">
                <textarea className="custom-textarea" placeholder="About me" />
                <div className="settings-submit-button-wrapper">
                    <button className="settings-submit-button">Update About</button>
                </div>
            </form>
        </div>
    );
}

export default AboutSettings;
