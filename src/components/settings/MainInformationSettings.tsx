import React from 'react';
import './Settings.css';

function MainInformationSettings() {
    return (
        <div className="settings-title-wrapper">
            <h1 className="settings-title">Main Information</h1>
            <form className="contact-form">
                <input className="custom-input" type="text" placeholder="First Name" />
                <input className="custom-input" type="text" placeholder="Last Name" />
                <div className="settings-submit-button-wrapper">
                    <button className="settings-submit-button">Update Main Information</button>
                </div>
            </form>
        </div>
    );
}

export default MainInformationSettings;
