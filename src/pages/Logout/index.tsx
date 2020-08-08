import React, { useState, useEffect } from 'react';
import { logout } from '../../services';
import { Redirect } from 'react-router-dom';
import LoadingPage from '../LoadingPage';

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
