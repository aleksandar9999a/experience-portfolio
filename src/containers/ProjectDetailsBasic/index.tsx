import React, { useEffect, useState } from 'react';
import IRProject from "../../interfaces/IRProject";
import ImageTile from '../../components/ImageTile';
import './styles.css';

function ProjectDetailsBasic({ title, description, images, link }: IRProject) {
    let [imgElements, setImgElements] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const list = images.map(x => <ImageTile url={x.url} key={x.id} size="400px" />);
        setImgElements(list)
    }, [])

    return ( 
        <div className="project-details-wrapper">
            <div className="project-details-title">
                <h1 className="project-details-title-text">{title}</h1>
            </div>
            <div className="project-details-images">
                {imgElements}
            </div>
            <div className="project-details-description">
                <p className="project-details-description-text">{description}</p>
            </div>
            <div className="project-details-link">
                <a href={link}>{link}</a>
            </div>
        </div>
    )
}

export default ProjectDetailsBasic;