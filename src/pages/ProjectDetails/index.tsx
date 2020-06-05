import React, { useEffect, useState } from 'react';
import './styles.css';
import { useParams, Link } from 'react-router-dom';
import IProject from './../../interfaces/IProject';
import { auth } from './../../services/db-auth';
import ProjectDetailsBasic from '../../containers/ProjectDetailsBasic';
import { getDefaultProjectByID } from '../../services';

function ProjectDetails() {
    let { id } = useParams();
    let [project, setProject] = useState<IProject>();
    let [isAuth, setIsAuth] = useState<boolean>(false);
    let [user, setUser] = useState<any>();

    useEffect(() => {
        getDefaultProjectByID(id).then(({ data }: { data: IProject }) => {
            setProject(data);
        }).catch(console.error);
        const subscriber = auth.subscribe(u => setUser(u));

        return () => {
            subscriber.unsubscribe();
        }
    }, [])

    useEffect(() => {
        if (!!user && !!project) {
            setIsAuth(user._id === project.creatorId);
        } else {
            setIsAuth(false);
        }
    }, [project, user])

    if (!project) { return <div className="project-error"><p className="project-error-text">No data!</p></div> }

    if (isAuth) {
        return (
            <div className="project-details">
                <ProjectDetailsBasic _id={project._id} title={project.title} description={project.description} images={project.images} link={project.link} />
                <div className="project-actions">
                    <Link className="link-button" to={`/projects/delete/${project._id}`}>
                        Edit
                    </Link>
                    <Link className="link-button" to={`/projects/edit/${project._id}`}>
                        Delete
                    </Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className="project-details">
                <ProjectDetailsBasic _id={project._id} title={project.title} description={project.description} images={project.images} link={project.link} />
            </div>
        )
    }


}

export default ProjectDetails;