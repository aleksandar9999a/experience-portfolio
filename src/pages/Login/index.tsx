/**
 * External dependencies.
 */
import React, { useState, SyntheticEvent, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

/**
 * Internal dependencies.
 */
import Loader from '../../components/Loader';
import LoadingPage from '../LoadingPage';
import { submitLogin } from '../../services';

function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [redirect, setRedirect] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function submit(e: SyntheticEvent) {
        e.preventDefault();
        if (email === '') {
            setMessage('Email is invalid!');
            return;
        }

        if (password === '' || password.length < 8 || password.length > 30) {
            setMessage('Password is invalid! Chars must be between 8 and 30.');
            return;
        }

        setIsLoading(true)
        submitLogin({ email, password })
            .then(user => {
                if (user) {
                    setRedirect(true);
                }
            })
            .catch(err => {
                if (err.message === "Request failed with status code 404") {
                    setMessage('Wrong email or password!')
                    return;
                }
                console.error(err.message);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const sub = setTimeout(() => {
            setMessage('');
        }, 3000);

        return () => {
            clearTimeout(sub);
        }
    }, [message])

    function setEmailValue(e: any) {
        setEmail(e.target.value);
    }

    function setPasswordValue(e: any) {
        setPassword(e.target.value);
    }

    if (redirect) {
        return <Redirect to="/" />;
    }

    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <div className="container">
            <div className="title">
                <h1>Login</h1>
            </div>
            <form className="custom-form" onSubmit={submit}>
                <input className="custom-input" type="email" placeholder="Email" value={email} onChange={setEmailValue} />
                <input className="custom-input" type="password" placeholder="Password" value={password} onChange={setPasswordValue} />
                <p className="custom-message">{message}</p>
                <div className="custom-btn-wrapper">
                    {isLoading
                        ? <Loader />
                        : <button className="custom-btn">Login</button>
                    }
                </div>
                <p className="custom-message">
                    Wondering why there is a login page? <br />
                    Our site also has an administrative part, which is available after logging in. <br />
                    Only the owner of this site has access to it.
                </p>
            </form>
        </div>
    );
}

export default Login;
