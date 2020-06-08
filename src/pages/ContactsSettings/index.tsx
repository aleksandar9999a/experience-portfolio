import React, { useState, useEffect } from 'react';
import { getEmail } from '../../services';
import IEmail from '../../interfaces/IEmail';
import ContactItem from '../../components/ContactItem';
import './styles.css';

function ContactsSettings() {
    const [items, setItems] = useState<IEmail[]>([]);
    const [list, setList] = useState<JSX.Element[]>([]);

    useEffect(() => {
        getEmail().then(({ data }: { data: IEmail[] }) => { setItems(data); }).catch(console.error)
    }, [])

    useEffect(() => {
        const newList = items.map(x => <ContactItem key={x._id} _id={x._id} name={x.name} email={x.email} subject={x.subject} message={x.message} />);
        setList(newList);
    }, [items])

    return (
        <div className="container">
            <div className="title">
                <h1>Contacts</h1>
            </div>
            <div className="contact-list-wrapper">
                <table className="contact-list">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ContactsSettings;