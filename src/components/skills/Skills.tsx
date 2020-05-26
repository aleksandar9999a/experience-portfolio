import React, { useState, useEffect } from 'react';
import './Skills.css';
import TimelineItemsInterface from '../../interfaces/TimelineItemInterface';
import Timeline from '../timeline/Timeline';
import { getSkills } from '../../services/db';
import DBSkillsResponse from '../../interfaces/DBSkillsResponse';

function Skills() {
  const [description, setDescription] = useState<any>();
  const [timelineItems, setTimelineItems] = useState<TimelineItemsInterface[]>([]);

  useEffect(() => {
    const skillsData = getSkills().subscribe(({ data }: { data: DBSkillsResponse }) => {
      setDescription(data.description);
      setTimelineItems(data.experience);
    });
    return () => {
      skillsData.unsubscribe();
    }
  }, [])

  return (
    <div className="skills">
      <div className="skills-title">
        <h1 className="skills-title-text">Skills</h1>
      </div>
      <div className="skills-headline">
        <p className="skills-headline-text">{description}</p>
      </div>
      <div className="skills-timeline">
        <Timeline items={timelineItems} />
      </div>
    </div>
  );
}

export default Skills;
