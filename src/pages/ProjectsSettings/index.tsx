import React, { useState, useEffect } from 'react';
import './styles.css';
import { Plus } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { getProjects } from '../../services/db-user';
import IRProject from '../../interfaces/IRProject';
import ProjectTile from '../../components/ProjectTile';

function ProjectsSettings() {
    let [projects, setProjects] = useState<JSX.Element[]>([]);

    useEffect(() => {
        getProjects().then(({ data }: { data: IRProject[]}) => {
            const list = data.map(project => (<div key={project._id} className="project-wrapper"><ProjectTile project={project}/></div>))
            setProjects(list);
        }).catch(console.error)
    }, [])

    return (
        <div className="projects-settings-title-wrapper">
            <h1 className="projects-settings-title">Projects</h1>
            <div className="projects-form">
                <div className="projects-tiles">
                    {projects}
                    <Link className="projects-tile" to="/settings/projects/createProject">
                        <Plus className="projects-add-icon"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectsSettings;
