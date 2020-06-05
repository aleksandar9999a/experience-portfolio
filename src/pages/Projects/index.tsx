import React, { useState, useEffect } from 'react';
import IProject from '../../interfaces/IProject';
import ProjectTile from '../../components/ProjectTile';
import './styles.css';
import { getDefaultProjects } from '../../services';
import Error from '../../containers/Error';

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
    return <Error title="Projects" error={error} />
  }

  return (
    <div className="container">
      <div className="title">
        <h1>Projects</h1>
      </div>
      <div className="projects-list">
        {projects}
      </div>
    </div>
  );
}

export default Projects;
