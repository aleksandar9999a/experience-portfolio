import React, { useState, useEffect } from 'react';
import './Skills.css';
import ITimelineItems from '../../interfaces/ITimelineItems';
import Timeline from '../../components/timeline/Timeline';
import { getSkills } from '../../services/db-defaults';
import ISkills from '../../interfaces/ISkills';

function Skills() {
  const [description, setDescription] = useState<string>();
  const [timelineItems, setTimelineItems] = useState<ITimelineItems[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    getSkills().then(({ data }: { data: ISkills }) => {
      if (!data) { setError('No data!'); return; }
      setDescription(data.description);
      setTimelineItems(data.experience);
    }).catch(err => setError(err.message));
  }, [])

  if (!!error) {
    return (
      <div className="skills">
        <div className="skills-title">
          <h1 className="skills-title-text">Skills</h1>
        </div>
        <div className="skills-headline">
          <p className="skills-headline-text skills-error">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="skills">
      <div className="skills-title">
        <h1 className="skills-title-text">Skills</h1>
      </div>
      <div className="skills-headline">
        <p className="skills-headline-text">{description}</p>
      </div>
      <div className="skills-timeline">
        {timelineItems.length > 0
          ? <Timeline items={timelineItems} />
          : null
        }
      </div>
    </div>
  );
}

export default Skills;
