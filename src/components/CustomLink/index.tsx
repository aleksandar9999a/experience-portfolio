import React from 'react';
import './styles.css';
import ICustomLink from '../../interfaces/ICustomLink';
import TIconsOptions from '../../types/TIconsOptions';

const icons: TIconsOptions = {
    instagram: require('./../../assets/instagram.png'),
    git: require('./../../assets/git.png'),
    linkedin: require('./../../assets/linkedin.png'),
    unknown: require('./../../assets/unknown.png')
}

function CustomLink({ alt, icon, link }: ICustomLink) {
    if (!icons[icon]) { icon = 'unknown'; }

    return (
        <a href={link} target="_blank" className="social-link" rel="noopener noreferrer">
            <img src={icons[icon]} alt={alt} className="social-icons" />
        </a>
    );
}

export default CustomLink;
