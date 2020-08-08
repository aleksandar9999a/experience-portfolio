import React from 'react';
import './styles.css';
import ICustomLink from '../../interfaces/ICustomLink';
import icons from '../../configs/icons';

function CustomLink({ alt, icon, link }: ICustomLink) {
    if (!icons[icon]) {
        icon = 'unknown';
    }

    return (
        <a href={link} target="_blank" className="social-link" rel="noopener noreferrer">
            <img src={icons[icon]} alt={alt} className="social-icons" />
        </a>
    );
}

export default CustomLink;
