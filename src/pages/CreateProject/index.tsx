import React, { useState, useEffect, SyntheticEvent } from 'react';
import './styles.css';
import { Plus } from 'react-bootstrap-icons';
import ImageTile from '../../components/ImageTile';
import ImageData from '../../interfaces/IImageData';
import { createProject } from '../../services';

const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

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
    let [title, setTitle] = useState<string>('');
    let [description, setDescription] = useState<string>('');
    let [link, setLink] = useState<string>('');
    let [message, setMessage] = useState<string>('');
    let [files, setFiles] = useState<ImageData[]>([]);
    let [images, setImages] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const arr = files.map(createURL).map(createImageTile);
        setImages(arr);
    }, [files])

    function addImage(file: File) {
        if (!file.type.includes('image')) { return; }
        let arr = [...files];
        const image = {
            file,
            id: arr.length > 0 ? arr[arr.length - 1].id + 1 : 0
        }
        arr.push(image);
        setFiles(arr);
    }

    function isValidData() {
        if (!title || title.length < 4) {
            setMessage('Title is required! Minimum chars are 4.');
            return false;
        }

        if (!description || description.length < 20) {
            setMessage('Description is required! Minimum chars are 20.');
            return false;
        }

        if (link !== '') {
            const isValid = regex.test(link);
            if (!isValid) {
                setMessage('Link is not required, but if you write it - it must be valid.');
            }
            return isValid;
        }

        if (files.length < 1) {
            setMessage('Minimum images is 1!');
            return false;
        }

        return true;
    }

    function handleChange(type: string, e: any) {
        const target = e.target;
        if (type === 'title') {
            setTitle(target.value);
        }
        if (type === 'description') {
            setDescription(target.value);
        }
        if (type === 'link') {
            setLink(target.value);
        }
        if (type === 'files') {
            addImage(target.files[0]);
        }
    }

    const titleChange = (e: any) => handleChange('title', e);
    const descriptionChange = (e: any) => handleChange('description', e);
    const linkChange = (e: any) => handleChange('link', e);
    const fileChange = (e: any) => handleChange('files', e);

    function submit(e: SyntheticEvent) {
        e.preventDefault();
        if (!isValidData()) { return; }

        setMessage('Loading...');
        createProject({ title, description, images: files, link })
            .then(() => setMessage('Successful uploaded!'))
            .catch(err => setMessage(err.message))
    }

    return (
        <div className="create-project-settings-wrapper">
            <h1 className="create-project-settings-title">Create Project</h1>
            <form className="create-project-settings-form">
                <input
                    className="custom-input"
                    type="text"
                    placeholder="Project Title"
                    value={title}
                    onChange={titleChange}
                />
                <textarea
                    className="custom-textarea"
                    placeholder="Description"
                    value={description}
                    onChange={descriptionChange}
                />
                <input
                    className="custom-input"
                    type="text"
                    placeholder="Link"
                    value={link}
                    onChange={linkChange}
                />
                <div className="upload-file-wrapper">
                    {images}
                    <div className="add-tile">
                        <input
                            className="custom-input upload-file"
                            type="file"
                            onChange={fileChange} />
                        <Plus className="add-image" />
                    </div>
                </div>
                <div className="create-project-settings-submit-button-wrapper">
                    {message === 'Loading...'
                        ? null
                        : <button className="create-project-settings-submit-button" onClick={submit}>
                            Submit
                        </button>
                    }
                </div>
                <p className="create-project-message">{message}</p>
            </form>
        </div>
    );
}

export default CreateProject;
