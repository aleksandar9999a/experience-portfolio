import React, { useState } from 'react';
import './styles.css';
import IContactItem from '../../interfaces/IContactItem';
import Loader from '../Loader';

function ContactItem({ email, handleDelete, handleUpdate }: IContactItem) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isAnsweredState, setIsAnsweredState] = useState<boolean>(email.isAnswered || false);

    function changeState() {
        setIsOpen(!isOpen);
    }

    function handleIsAnswered() {
        setIsLoading(true);
        setIsAnsweredState(!isAnsweredState);
        handleUpdate(email)
            .catch(console.error)
            .finally(() => setIsLoading(false));
    }

    function handleRemove() {
        handleDelete(email._id);
    }

    return (
        <tr className="contact-item">
            <td colSpan={3}>
                <div className="contact-item-title" onClick={changeState} >
                    <p className="contact-item-title-text">{email.email}</p>
                    <p className="contact-item-title-text">{email.subject}</p>
                </div>
                <div className="contact-item-content" style={isOpen ? { display: 'block' } : { display: 'none' }}>
                    <p>{email.name}</p>
                    <p>{email.message}</p>
                    <br />
                    <p>Is answered? <span>{`${isAnsweredState}`}</span></p>
                    {isLoading
                        ? <Loader />
                        : <div>
                            <button className="custom-btn contact-item-btn" onClick={handleIsAnswered}>Answered</button>
                            <button className="custom-btn contact-item-btn" onClick={handleRemove}>Delete</button>
                        </div>
                    }
                </div>
            </td>
        </tr>
    )
}

export default ContactItem;