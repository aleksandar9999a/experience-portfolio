/**
 * External dependencies.
 */
import React, { useState, useEffect } from 'react';

/**
 * Internal dependencies.
 */
import ITimelineItems from '../../interfaces/ITimelineItems';
import Timeline from '../../components/Timeline';
import ErrorPage from './../ErrorPage';
import LoadingPage from '../LoadingPage';
import { getDefaultAbout } from '../../services';

import './styles.css';


function About() {
    const [headline, setHeadline] = useState<string>();
    const [timelineItems, setTimelineItems] = useState<ITimelineItems[]>([]);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoding] = useState<boolean>(true);

    useEffect(() => {
        getDefaultAbout()
            .then(data => {
                if (!data) {
                    Promise.reject(new Error('No data!'));
                    return;
                }

                setHeadline(data.description);
                setTimelineItems(data.courses);
            })
            .catch(err => setError(err.message))
            .finally(() => setIsLoding(false));
    }, [])

    if (isLoading) {
        return <LoadingPage />;
    }
    if (!!error) {
        return <ErrorPage title="About" error={error} />;
    }

    return (
        <div className="container">
            <div className="title">
                <h1>About</h1>
            </div>
            <div className="headline">
                <p className="headline-text">{headline}</p>
            </div>
            <div className="about-timeline">
                <Timeline items={timelineItems} />
            </div>
        </div>
    );
}

export default About;
