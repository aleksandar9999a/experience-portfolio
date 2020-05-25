import React from 'react';
import './Skills.css';
import TimelineItemsInterface from '../../interfaces/TimelineItemInterface';
import Timeline from '../timeline/Timeline';

const skillsResume = `
My field of work is in Front-End development or in other words client side of the web.
I have experience in developing small and medium projects with the help of Angular, React and VueJS.
I also have experience with Vanilla JS.
`

const timelineItems: TimelineItemsInterface[] = [
  {
    title: 'Montupet Bulgaria',
    desc: 'Casting of engine heads.',
    link: 'https://montupet.bg/',
    start: '2017',
    end: '2018'
  },
  {
    title: 'Time Assistant',
    desc: 'Time Assistant is a Sales Representative of Econt. We made deliveries of postal, courier and cargo shipments.',
    start: '2018',
    end: '2020'
  },
]

function Skills() {
  return (
    <div className="skills">
      <div className="skills-title">
        <h1 className="skills-title-text">Skills</h1>
      </div>
      <div className="skills-headline">
        <p className="skills-headline-text">{skillsResume}</p>
      </div>
      <div className="skills-timeline">
        <Timeline items={timelineItems} />
      </div>
    </div>
  );
}

export default Skills;
