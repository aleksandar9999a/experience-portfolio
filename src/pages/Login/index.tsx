import React, { useState, SyntheticEvent } from 'react';
import './styles.css';
import { submitLogin } from '../../services';
import { Redirect } from 'react-router-dom';
import Loader from '../../components/Loader';
import LoadingPage from '../LoadingPage';

function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [redirect, setRedirect] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function submit(e: SyntheticEvent) {
        e.preventDefault();
        if (email === '') {
            setError('Email is invalid!')
            removeErrorAfterTime(3000);
            return;
        }

        if (password === '' || password.length < 8 || password.length > 30) {
            setError('Password is invalid! Chars must be between 8 and 30.')
            removeErrorAfterTime(3000);
            return;
        }
        setIsLoading(true)
        submitLogin({ email, password })
            .then(user => {
                if (user) { setRedirect(true); }
            }).catch(err => {
                if (err.message === "Request failed with status code 404") {
                    setError('Wrong email or password!')
                    removeErrorAfterTime(3000);
                    return;
                }
                console.log(err.message);
            }).finally(() => setIsLoading(false));
    }

    function removeErrorAfterTime(time: number) {
        return removeText(setError, 3000);
    }


    function removeText(setValue: Function, time: number) {
        return setTimeout(() => {
            setValue('');
        }, time);
    }

    function setEmailValue(e: any) {
        setEmail(e.target.value);
    }

    function setPasswordValue(e: any) {
        setPassword(e.target.value);
    }

    if (redirect) { return <Redirect to="/" /> }
    if (isLoading) { return <LoadingPage /> }

    return (
        <div className="container">
            <div className="title">
                <h1>Login</h1>
            </div>
            <form className="contact-form" onSubmit={submit}>
                <input className="custom-input" type="email" placeholder="Email" value={email} onChange={setEmailValue} />
                <input className="custom-input" type="password" placeholder="Password" value={password} onChange={setPasswordValue} />
                <p className="custom-error">{error}</p>
                {isLoading ? <Loader /> : null }
                <div className="login-btn-wrapper">
                    <button className="login-button">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
