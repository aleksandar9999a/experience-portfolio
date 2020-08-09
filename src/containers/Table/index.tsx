/**
 * External dependencies.
 */
import React, { useState, useEffect } from 'react';

/**
 * Internal dependencies.
 */
import IEmail from '../../interfaces/IEmail';
import { getEmail, deleteEmail, updateEmail } from '../../services';
import ContactItem from '../../components/ContactItem';
import LoadingPage from '../../pages/LoadingPage';

import './styles.css';


function Table() {
    const [items, setItems] = useState<IEmail[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setEmails();
    }, [])

    function setEmails() {
        setIsLoading(true);
        getEmail()
            .then(({ data }: { data: IEmail[] }) => {
                setItems(data);
            })
            .catch(console.error)
            .finally(() => setIsLoading(false));
    }

    function handleDelete(id: string) {
        setIsLoading(true);
        deleteEmail(id)
            .then(() => setEmails())
            .catch(console.error)
            .finally(() => setIsLoading(false));
    }

    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <table className="contact-list">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Subject</th>
                </tr>
            </thead>
            <tbody>
                {items.length > 0
                    ? items.map(x => {
                        return <ContactItem
                            key={x._id}
                            email={x}
                            handleDelete={handleDelete}
                            handleUpdate={updateEmail}
                        />;
                    })
                    : <tr className="contact-item">
                        <td colSpan={3}>
                            No Emails!
                        </td>
                    </tr>
                }
            </tbody>
        </table>
    )
}

export default Table;