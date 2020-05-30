import React from 'react';
import './CustomLink.css';
import ICustomLink from '../../interfaces/ICustomLink';
import IconsOptions from '../../types/IconsOptions';

const icons: IconsOptions = {
    instagram: require('./../../assets/instagram.png'),
    git: require('./../../assets/git.png'),
    linkedin: require('./../../assets/linkedin.png'),
    unknown: require('./../../assets/unknown.png')
}

function CustomLink(props: ICustomLink) {
    let { alt, icon, link } = props;
    if (!icons[icon]) { icon = 'unknown'; }

    return (
        <a href={link} target="_blank" className="social-link" rel="noopener noreferrer">
            <img src={icons[icon]} alt={alt} className="social-icons" />
        </a>
    );
}

export default CustomLink;
