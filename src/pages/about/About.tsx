import React, { useState, useEffect } from 'react';
import './About.css';
import Timeline from '../../components/timeline/Timeline';
import ITimelineItems from '../../interfaces/ITimelineItems';
import { getAbout } from '../../services/db-defaults';
import IAbout from '../../interfaces/IAbout';

function About() {
  const [headline, setHeadline] = useState<string>();
  const [timelineItems, setTimelineItems] = useState<ITimelineItems[]>([]);

  useEffect(() => {
    getAbout().then(({ data }: { data: IAbout }) => {
      setHeadline(data.description)
      setTimelineItems(data.courses)
    });
  }, [])

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
          : null
        }
      </div>
    </div>
  );
}

export default About;
