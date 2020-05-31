import React, { useState, SyntheticEvent } from 'react';
import './Login.css';
import { submitLogin } from '../../services/db-auth';
import { Redirect } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [redirect, setRedirect] = useState<boolean>(false);

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

        submitLogin({ email, password })
            .then(user => {
                if (user) {
                    setSuccess("Successful login!");
                    removeSuccessAfterTime(3000);
                    setRedirect(true);
                }
            }).catch(err => {
                if (err.message === "Request failed with status code 404") {
                    setError('User is unknown.')
                    removeErrorAfterTime(3000);
                }
                console.log(err.message);
            });
    }

    function removeErrorAfterTime(time: number) {
        return removeText(setError, 3000);
    }

    function removeSuccessAfterTime(time: number) {
        return removeText(setSuccess, 3000);
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

    return (
        <div className="login">
            <div className="title">
                <h1 className="title-text">Login</h1>
            </div>
            <form className="contact-form" onSubmit={submit}>
                <input className="custom-input" type="email" placeholder="Email" value={email} onChange={setEmailValue} />
                <input className="custom-input" type="password" placeholder="Password" value={password} onChange={setPasswordValue} />
                {error ? <p className="custom-error">{error}</p> : null}
                {success ? <p className="custom-success">{success}</p> : null}
                <div className="login-btn-wrapper">
                    <button className="login-button">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
