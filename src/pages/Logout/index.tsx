/**
 * External dependencies.
 */
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

/**
 * Internal dependencies.
 */
import LoadingPage from '../LoadingPage';
import { logout } from '../../services';

function Logout() {
    const [redirect, setRedirect] = useState<boolean>(false);

    useEffect(() => {
        logout().then(() => setRedirect(true));
    })

    return redirect
        ? <Redirect to="/" />
        : <LoadingPage />
}

export default Logout;
