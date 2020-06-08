import React, { useState, useEffect } from 'react';
import './styles.css';
import ITimelineItems from '../../interfaces/ITimelineItems';
import Timeline from '../../components/Timeline';
import { getDefaultSkills } from '../../services';
import ISkills from '../../interfaces/ISkills';
import Error from '../../containers/Error';
import LoadingPage from '../LoadingPage';


function Skills() {
  const [description, setDescription] = useState<string>();
  const [timelineItems, setTimelineItems] = useState<ITimelineItems[]>([]);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getDefaultSkills().then(({ data }: { data: ISkills }) => {
      if (!data) { setError('No data!'); return; }
      setDescription(data.description);
      setTimelineItems(data.experience);
    }).catch(err => setError(err.message)).finally(() => setIsLoading(false));
  }, [])

  if (isLoading) { return <LoadingPage />; }
  if (!!error) { return <Error title="Skills" error={error} />; }

  return (
    <div className="container">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <div className="headline">
        <p className="headline-text">{description}</p>
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
