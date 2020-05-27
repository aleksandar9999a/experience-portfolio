import React, { useState, useEffect } from 'react';
import { logout } from './../../services/db';
import { Redirect } from 'react-router-dom';

function Logout() {
    const [redirect, setRedirect] = useState<boolean>(false);

    useEffect(() => {
        logout().then(() => setRedirect(true));
    })
    
    
    if (redirect) {
        return <Redirect to="/" />;
    }
    return null;
}

export default Logout;
