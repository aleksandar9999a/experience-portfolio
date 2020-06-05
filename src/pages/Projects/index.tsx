import React, { useState, useEffect } from 'react';
import IRProject from '../../interfaces/IRProject';
import ProjectTile from '../../components/ProjectTile';
import './styles.css';
import { getDefaultProjects } from '../../services';

function Projects() {
  let [projects, setProjects] = useState<JSX.Element[]>([]);

  useEffect(() => {
    getDefaultProjects().then(({ data }: { data: IRProject[] }) => {
      const list = data.map(project => (<div key={project._id} className="project-wrapper"><ProjectTile project={project} /></div>))
      setProjects(list);
    }).catch(console.error)
  }, [])
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
