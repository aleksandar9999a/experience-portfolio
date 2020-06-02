import React, { useState, useEffect } from 'react';
import './styles.css';
import { Plus } from 'react-bootstrap-icons';
import ImageTile from '../../components/ImageTile';
import ImageData from '../../interfaces/IImageData';

function createURL(data: ImageData) {
    return {
        url: URL.createObjectURL(data.file),
        id: data.id,
        file: data.file
    }
}

function createImageTile(data: ImageData) {
    return <div className="image-tile-wrapper" key={data.id}><ImageTile url={data.url || ''} /></div>
}

function CreateProject() {
    let [files, setFiles] = useState<ImageData[]>([]);
    let [images, setImages] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const arr = files.map(createURL).map(createImageTile);
        setImages(arr);
    }, [files])

    function addImage(e: any) {
        if (!e.target.files[0].type.includes('image')) { return; }
        let arr = [...files];
        const image = {
            file: e.target.files[0],
            id: arr.length > 0 ? arr[arr.length - 1].id + 1 : 0
        }
        arr.push(image);
        setFiles(arr);
    }

    return (
        <div className="create-project-settings-wrapper">
            <h1 className="create-project-settings-title">Create Project</h1>
            <form className="create-project-settings-form">
                <input className="custom-input" type="text" placeholder="Project Name" />
                <textarea className="custom-textarea" placeholder="Description" />
                <input className="custom-input" type="text" placeholder="Link" />
                <div className="upload-file-wrapper">
                    {images}
                    <div className="add-tile">
                        <input className="custom-input upload-file" type="file" onChange={addImage} />
                        <Plus className="add-image" />
                    </div>
                </div>
                <div className="create-project-settings-submit-button-wrapper">
                    <button className="create-project-settings-submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default CreateProject;
