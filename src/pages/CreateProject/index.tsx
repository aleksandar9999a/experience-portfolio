/**
 * External dependencies.
 */
import React, { useState, useEffect, SyntheticEvent } from 'react';
import isURL from 'validator/lib/isURL';
import { Plus } from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom';

/**
 * Internal dependencies.
 */
import IProject from '../../interfaces/IProject';
import IUploadedImage from '../../interfaces/IUploadedImage';
import ImageTile from '../../components/ImageTile';
import Loader from '../../components/Loader';
import { createProject, getDefaultProjectByID, uploadImage } from '../../services';

import './styles.css';

function CreateProject() {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [files, setFiles] = useState<IUploadedImage[]>([]);
    const [creatorId, setCreatorId] = useState<string>();
    const [isLoading, setIsLoding] = useState<boolean>(false);
    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }

        getDefaultProjectByID(id)
            .then(({ data }: { data: IProject }) => {
                if (!data) {
                    return;
                }

                setTitle(data.title);
                setDescription(data.description);
                setLink(data.link);
                setFiles(data.images);
                setCreatorId(data.creatorId);
            })
            .catch(console.error)
            .finally(() => setIsLoding(false));
    }, [id])

    function handleRemoveImg(imgId: string) {
        setIsLoding(true);
        const newFiles = files.filter(file => file._id !== imgId);
        setFiles(newFiles);
        setIsLoding(false);
    }

    function addImage(newFiles: File[]) {
        if (newFiles.find(file => !file.type.includes('image'))) {
            setMessage("Invalid Image Format!");
            return;
        }

        setIsLoding(true);
        Promise.all(newFiles.map(uploadImage))
            .then((data: IUploadedImage[]) => {
                const arr = [...files, ...data];
                setFiles(arr as IUploadedImage[]);
            })
            .catch(err => setMessage(err.message))
            .finally(() => setIsLoding(false));
    }

    function isValidData() {
        if (!title || title.length < 4) {
            setMessage('Title - Minimum chars are 4.');
            return false;
        }
        if (!description || description.length < 20) {
            setMessage('Description - Minimum chars are 20.');
            return false;
        }
        if (files.length < 1) {
            setMessage('Minimum images is 1!');
            return false;
        }
        if (link !== '' && !isURL(link)) {
            setMessage('Link is not required, but if you write it - it must be valid.');
            return false;
        }
        return true;
    }

    function handleChange(type: string, e: any) {
        const target = e.target;
        const types = {
            title: (t: any) => setTitle(t.value),
            description: (t: any) => setDescription(t.value),
            link: (t: any) => setLink(t.value),
            files: (t: any) => {
                const files = Array.from(t.files);
                addImage(files as File[]);
            }
        }

        if (typeof (types as any)[type] === 'function') {
            (types as any)[type](target);
        }
    }

    const titleChange = (e: any) => handleChange('title', e);
    const descriptionChange = (e: any) => handleChange('description', e);
    const linkChange = (e: any) => handleChange('link', e);
    const fileChange = (e: any) => handleChange('files', e);

    function submit(e: SyntheticEvent) {
        e.preventDefault();
        if (!isValidData()) {
            return;
        }

        setIsLoding(true);
        createProject({ _id: id, creatorId, title, description, images: files, link })
            .then(() => setMessage('Successful uploaded!'))
            .catch((err: Error) => setMessage(err.message))
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
                    {files.map(data => {
                        return <div className="image-tile-wrapper" key={data._id} >
                            <ImageTile
                                id={data._id}
                                url={data.url}
                                isEditable={true}
                                handleRemove={handleRemoveImg}
                            />
                        </div>
                    })}
                    <div className="add-tile" style={isLoading ? { display: 'none' } : { display: 'flex' }}>
                        <input
                            className="custom-input upload-file"
                            type="file"
                            onChange={fileChange}
                            multiple={true} />
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
