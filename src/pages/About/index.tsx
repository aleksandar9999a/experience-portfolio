import React, { useState, useEffect } from 'react';
import './styles.css';
import Timeline from '../../components/Timeline';
import ITimelineItems from '../../interfaces/ITimelineItems';
import IAbout from '../../interfaces/IAbout';
import { getDefaultAbout } from '../../services';

function About() {
  const [headline, setHeadline] = useState<string>();
  const [timelineItems, setTimelineItems] = useState<ITimelineItems[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    getDefaultAbout().then(({ data }: { data: IAbout }) => {
      if (!data) { setError('No data!'); return; }
      setHeadline(data.description);
      setTimelineItems(data.courses);
    }).catch(err => setError(err.message));
  }, [])

  if (!!error) {
    return (
      <div className="about">
        <div className="about-title">
          <h1 className="about-title-text">About me</h1>
        </div>
        <div className="about-headline">
          <p className="about-headline-text about-error">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="about">
      <div className="about-title">
        <h1 className="about-title-text">About me</h1>
      </div>
      <div className="about-headline">
        <p className="about-headline-text">{headline}</p>
      </div>
      <div className="about-timeline">
        {timelineItems.length > 0
          ? <Timeline items={timelineItems} />
          : <p className="about-headline-text about-error">No Timeline</p>
        }
      </div>
    </div>
  );
}

export default About;
