import React from 'react';
import Loader from '../../components/Loader';
import './styles.css'

function LoadingPage() {
    return (
        <div className="container loading-page">
            <div className="loader-wrapper">
            <Loader />
            </div>
        </div>
    )
}

export default LoadingPage;