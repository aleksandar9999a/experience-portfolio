import React, { useEffect, useState } from 'react';
import './styles.css';
import { useParams, Link } from 'react-router-dom';
import IProject from './../../interfaces/IProject';
import { auth } from './../../services/db-auth';
import ProjectDetailsBasic from '../../containers/ProjectDetailsBasic';
import { getDefaultProjectByID } from '../../services';
import Error from '../../containers/Error';
import LoadingPage from '../LoadingPage';

function ProjectDetails() {
    let { id } = useParams();
    let [project, setProject] = useState<IProject>();
    let [isAuth, setIsAuth] = useState<boolean>(false);
    let [user, setUser] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getDefaultProjectByID(id)
            .then(({ data }: { data: IProject }) => {
                setProject(data);
            })
            .catch(console.error)
            .finally(() => setIsLoading(false));

        const subscriber = auth.subscribe(u => setUser(u));

        return () => {
            subscriber.unsubscribe();
        }
    }, [id])

    useEffect(() => {
        if (!!user && !!project) {
            setIsAuth(user._id === project.creatorId);
        } else {
            setIsAuth(false);
        }
    }, [project, user])

    if (isLoading) {
        return <LoadingPage />;
    }

    if (!project) {
        return <Error title="Project Details" error="No Data!" />
    }

    return (
        <div className="project-details">
            <ProjectDetailsBasic
                _id={project._id}
                title={project.title}
                description={project.description}
                images={project.images}
                link={project.link}
            />
            {isAuth
                ? (
                    <div className="project-actions">
                        <Link className="link-button" to={`/projects/edit/${project._id}`}>
                            Edit
                        </Link>
                        <Link className="link-button" to={`/projects/delete/${project._id}`}>
                            Delete
                        </Link>
                    </div>
                )
                : null}
        </div>
    )
}

export default ProjectDetails;