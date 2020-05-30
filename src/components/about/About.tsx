import React, { useState, useEffect } from 'react';
import './About.css';
import Timeline from '../timeline/Timeline';
import TimelineItemsInterface from '../../interfaces/TimelineItemInterface';
import { getAbout } from './../../services/db';

function About() {
  const [headline, setHeadline] = useState<string>();
  const [timelineItems, setTimelineItems] = useState<TimelineItemsInterface[]>([]);

  useEffect(() => {
    const aboutData = getAbout().subscribe((data: any) => {
      setHeadline(data.description)
      setTimelineItems(data.courses)
    });
    return () => {
      aboutData.unsubscribe();
    }
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
