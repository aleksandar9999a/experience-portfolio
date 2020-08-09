/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import Table from '../../containers/Table';

import './styles.css';


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