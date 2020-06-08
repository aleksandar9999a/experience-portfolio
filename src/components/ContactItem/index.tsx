import React from 'react';
import IEmail from '../../interfaces/IEmail';
import './styles.css';

function ContactItem({ _id, name, email,  subject, message }: IEmail) {
    return (
    <tr id={_id} className="contact-item">
        <td>{name}</td>
        <td>{subject}</td>
    </tr>
    )
}

export default ContactItem;