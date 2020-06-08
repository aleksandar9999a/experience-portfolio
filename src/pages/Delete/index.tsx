import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { deleteProject } from '../../services';
import './styles.css';

function Delete() {
    const { id } = useParams();
    const [redirect, setRedirect] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('Loading...');

    useEffect(() => {
        deleteProject(id).then(() => setRedirect(true)).catch(err => setMessage(err.message));
    }, [])

    if (redirect) {
        return <Redirect to="/projects" />
    }

    return (
        <div className="container delete-container">
            <h1 className="message">{message}</h1>
        </div>
    );
}

export default Delete;