import React from 'react';
import './Skills.css';

const skillsResume = `
My field of work is in Front-End development or in other words client side of the web.
I have experience in developing small and medium projects with the help of Angular, React and VueJS.
I also have experience with Vanilla JS.
`

function Skills() {
  return (
    <div className="skills">
      <div className="skills-title">
        <h1 className="skills-title-text">Skills</h1>
        <p className="skills-title-headline">{skillsResume}</p>
      </div>
    </div>
  );
}

export default Skills;
