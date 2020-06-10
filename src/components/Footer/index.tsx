import React from 'react';
import './styles.css';
import Logo from '../Logo';

function Footer() {
    return (
        <div className="footer">
            <Logo width="90px" height="80px" nameSize="14px" logoSize="25px"/>
            <p className="footer-text">© 2020 A. Todorov. All rights reserved.</p>
        </div>
    )
}

export default Footer;