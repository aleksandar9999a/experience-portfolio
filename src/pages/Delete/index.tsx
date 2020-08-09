/**
 * External dependencies.
 */
import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';

/**
 * Internal dependencies.
 */
import LoadingPage from '../LoadingPage';
import ErrorPage from './../ErrorPage';
import { deleteProject } from '../../services';

import './styles.css';


function Delete() {
    const { id } = useParams();
    const [redirect, setRedirect] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    useEffect(() => {
        deleteProject(id)
            .then(() => setRedirect(true))
            .catch(err => setError(err.message));
    }, [id])

    if (redirect) {
        return <Redirect to="/projects" />
    }

    if (error) {
        return <ErrorPage title="Delete" error={error} />

    }
    return <LoadingPage />;
}

export default Delete;