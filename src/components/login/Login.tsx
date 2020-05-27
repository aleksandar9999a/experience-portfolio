import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <div className="title">
                <h1 className="title-text">Login</h1>
            </div>
            <form className="contact-form">
                <input className="custom-input" type="email" placeholder="Email" />
                <input className="custom-input" type="password" placeholder="Password" />
                <button className="custom-button">Login</button>
            </form>
        </div>
    );
}

export default Login;
