/**
 * External dependencies.
 */
import React, { useState, useEffect } from 'react';

/**
 * Internal dependencies.
 */
import ITimelineItems from '../../interfaces/ITimelineItems';
import Timeline from '../../components/Timeline';
import ErrorPage from '../ErrorPage';
import LoadingPage from '../LoadingPage';
import { getDefaultSkills } from '../../services';

import './styles.css';


function Skills() {
  const [description, setDescription] = useState<string>();
  const [timelineItems, setTimelineItems] = useState<ITimelineItems[]>([]);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getDefaultSkills()
      .then(data => {
        if (!data) {
          Promise.reject(new Error('No data!'));
          return;
        }

        setDescription(data.description);
        setTimelineItems(data.experience);
      })
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [])

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!!error) {
    return <ErrorPage title="Skills" error={error} />;
  }

  return (
    <div className="container">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <div className="headline">
        <p className="headline-text">{description}</p>
      </div>
      <div className="skills-timeline">
        <Timeline items={timelineItems} />
      </div>
    </div>
  );
}

export default Skills;
