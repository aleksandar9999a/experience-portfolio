import React, { useState, useEffect } from 'react';
import IProject from '../../interfaces/IProject';
import ProjectTile from '../../components/ProjectTile';
import './styles.css';
import { getDefaultProjects } from '../../services';
import Error from '../../containers/Error';
import LoadingPage from '../LoadingPage';

function Projects() {
    let [projects, setProjects] = useState<IProject[]>([]);
    let [error, setError] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getDefaultProjects()
            .then(({ data }: { data: IProject[] }) => {
                setProjects(data);
            })
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false));
    }, [])

    if (isLoading) {
        return <LoadingPage />;
    }

    if (error || projects.length === 0) {
        return <Error title="Projects" error={error || 'No Data!'} />;
    }

    return (
        <div className="container">
            <div className="title">
                <h1>Projects</h1>
            </div>
            <div className="projects-list">
                {
                    projects.map(project => {
                        return <div key={project._id} className="project-wrapper">
                            <ProjectTile project={project} basicRoute="/projects/details" />
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Projects;
