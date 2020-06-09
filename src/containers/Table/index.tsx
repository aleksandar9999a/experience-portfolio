import React, { useState, useEffect } from 'react';
import './styles.css';
import IEmail from '../../interfaces/IEmail';
import { getEmail, deleteEmail, updateEmail } from '../../services';
import ContactItem from '../../components/ContactItem';
import LoadingPage from '../../pages/LoadingPage';

function Table() {
    const [items, setItems] = useState<IEmail[]>([]);
    const [list, setList] = useState<JSX.Element[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => { setIsLoading(true); setEmails().finally(() => setIsLoading(false)); }, [])

    useEffect(() => {
        const newList = items.map(x => <ContactItem key={x._id} email={x} handleDelete={handleDelete} handleUpdate={handleUpdate} />);
        setList(newList);
    }, [items])

    function setEmails() {
        return getEmail().then(({ data }: { data: IEmail[] }) => { setItems(data); }).catch(console.error);
    }

    function handleUpdate(item: IEmail) {
        return updateEmail(item).then(() => setEmails()).catch(console.error);
    }

    function handleDelete(id: string) {
        setIsLoading(true);
        deleteEmail(id).then(() => setEmails()).catch(console.error).finally(() => setIsLoading(false));
    }

    if (isLoading) { return <LoadingPage />; }

    return (
        <table className="contact-list">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Subject</th>
                </tr>
            </thead>
            <tbody>
                {list.length > 0
                    ? list
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