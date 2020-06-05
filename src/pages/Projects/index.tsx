import React, { useState, useEffect } from 'react';
import IProject from '../../interfaces/IProject';
import ProjectTile from '../../components/ProjectTile';
import './styles.css';
import { getDefaultProjects } from '../../services';

function Projects() {
  let [projects, setProjects] = useState<JSX.Element[]>([]);
  let [error, setError] = useState<string>();

  useEffect(() => {
    getDefaultProjects().then(({ data }: { data: IProject[] }) => {
      const list = data.map(project => (<div key={project._id} className="project-wrapper"><ProjectTile project={project} /></div>))
      setProjects(list);
    }).catch(err => setError(err.message));
  }, [])

  if (error) {
    return (
      <div>
        <h1 className="projects-title">Projects</h1>
        <div className="about-headline">
          <p className="about-headline-text about-error">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="projects-title">Projects</h1>
      <div className="projects-list">
        {projects}
      </div>
    </div>
  );
}

export default Projects;
