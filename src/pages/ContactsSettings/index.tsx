import React from 'react';
import './styles.css';
import Table from '../../containers/Table';

function ContactsSettings() {
    return (
        <div className="container">
            <div className="title">
                <h1>Contacts</h1>
            </div>
            <div className="contact-list-wrapper">
               <Table />
            </div>
        </div>
    )
}

export default ContactsSettings;