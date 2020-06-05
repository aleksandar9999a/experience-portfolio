import React, { useState, useEffect } from 'react';
import './styles.css';
import { Plus } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import IProject from '../../interfaces/IProject';
import ProjectTile from '../../components/ProjectTile';
import { getAuthProjects } from '../../services';

function ProjectsSettings() {
    let [projects, setProjects] = useState<JSX.Element[]>([]);

    useEffect(() => {
        getAuthProjects().then(({ data }: { data: IProject[] }) => {
            const list = data.map(project => (<div key={project._id} className="project-wrapper"><ProjectTile project={project} basicRoute="/settings/projects"/></div>))
            setProjects(list);
        }).catch(console.error)
    }, [])

    return (
        <div className="container">
            <div className="title">
                <h1>Projects</h1>
            </div>
            <div className="projects-form">
                <div className="projects-tiles">
                    {projects}
                    <Link className="projects-tile" to="/settings/projects/createProject">
                        <Plus className="projects-add-icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectsSettings;
