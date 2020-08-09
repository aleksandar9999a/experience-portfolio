/**
 * External dependencies.
 */
import React from 'react';

/**
 * Internal dependencies.
 */
import ILogo from '../../interfaces/ILogo';

import './styles.css';

function Logo({ width = '80px', height = '60px', logoSize = '20px', nameSize = '10' }: ILogo) {
    const styles = {
        container: { width, height },
        logo: { fontSize: logoSize },
        name: { fontSize: nameSize }
    };

    return (
        <div className="logo" style={styles.container} >
            <div className="logo-wrapper">
                <p className="logo-a" style={styles.logo}>A</p>
                <p className="logo-name" style={styles.name}>Alexandar</p>
            </div>
        </div>
    )
}

export default Logo;