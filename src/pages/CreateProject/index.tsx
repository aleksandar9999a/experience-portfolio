import React, { useState, useEffect, SyntheticEvent } from 'react';
import './styles.css';
import { Plus } from 'react-bootstrap-icons';
import ImageTile from '../../components/ImageTile';
import { createProject, getDefaultProjectByID, uploadImage } from '../../services';
import { useParams } from 'react-router-dom';
import IProject from '../../interfaces/IProject';
import IUploadedImage from '../../interfaces/IUploadedImage';
import isURL from 'validator/lib/isURL';
import Loader from '../../components/Loader';

function CreateProject() {
    let [title, setTitle] = useState<string>('');
    let [description, setDescription] = useState<string>('');
    let [link, setLink] = useState<string>('');
    let [message, setMessage] = useState<string>('');
    let [files, setFiles] = useState<IUploadedImage[]>([]);
    let [images, setImages] = useState<JSX.Element[]>([]);
    let [creatorId, setCreatorId] = useState<string>();
    let [isLoading, setIsLoding] = useState<boolean>(true);
    const { id } = useParams();

    useEffect(() => {
        if (!id) { return; }
        getDefaultProjectByID(id).then(({ data }: { data: IProject }) => {
            if (data) {
                setTitle(data.title);
                setDescription(data.description);
                setLink(data.link);
                setFiles(data.images);
                setCreatorId(data.creatorId);
            }
        }).catch(console.error).finally(() => setIsLoding(false));
    }, [id])

    useEffect(() => {
        const arr = files.map(data => <div className="image-tile-wrapper" key={data._id}><ImageTile url={data.url} /></div>);
        setImages(arr);
    }, [files])

    function addImage(file: File) {
        if (!file.type.includes('image')) { return; }
        setIsLoding(true);
        uploadImage(file).then((data: IUploadedImage) => {
            let arr = [...files];
            arr.push(data);
            setFiles(arr);
        }).catch(console.error).finally(() => setIsLoding(false))
    }

    function isValidData() {
        if (!title || title.length < 4) { setMessage('Title - Minimum chars are 4.'); return false; }
        if (!description || description.length < 20) { setMessage('Description - Minimum chars are 20.'); return false; }
        if (files.length < 1) { setMessage('Minimum images is 1!'); return false; }

        if (link !== '') {
            const isValid = isURL(link);
            if (!isValid) {
                setMessage('Link is not required, but if you write it - it must be valid.');
            }
            return isValid;
        }

        return true;
    }

    function handleChange(type: string, e: any) {
        const target = e.target;
        if (type === 'title') { setTitle(target.value); }
        if (type === 'description') { setDescription(target.value); }
        if (type === 'link') { setLink(target.value); }
        if (type === 'files') { addImage(target.files[0]); }
    }

    const titleChange = (e: any) => handleChange('title', e);
    const descriptionChange = (e: any) => handleChange('description', e);
    const linkChange = (e: any) => handleChange('link', e);
    const fileChange = (e: any) => handleChange('files', e);

    function submit(e: SyntheticEvent) {
        e.preventDefault();
        if (!isValidData()) { return; }
        setIsLoding(true);
        createProject({ _id: id, creatorId, title, description, images: files, link })
            .then(() => setMessage('Successful uploaded!'))
            .catch(err => setMessage(err.message))
            .finally(() => setIsLoding(false))
    }

    return (
        <div className="create-project-settings-wrapper">
            <h1 className="create-project-settings-title">{id ? 'Edit' : 'Create'} Project</h1>
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
                <div className="custom-btn-wrapper">
                    {isLoading
                        ? <Loader />
                        : <button className="custom-btn" onClick={submit}>Submit</button>
                    }
                </div>
                <p className="create-project-message">{message}</p>
            </form>
        </div>
    );
}

export default CreateProject;
