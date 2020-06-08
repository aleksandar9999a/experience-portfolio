import storage from './firebase';
import config from './../configs/dbConfig';
import Axios from 'axios';
import IProject from '../interfaces/IProject';

function generateDateID() {
    const date = new Date();
    return `${date.getFullYear()}${date.getMonth()}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getMilliseconds()}`;
}

function uploadFile(file: File) {
    const dateID = generateDateID()
    return storage.ref(`images/${dateID}${file.name}`).put(file);
}

function getURL(shot: firebase.storage.UploadTaskSnapshot) {
    return shot.ref.getDownloadURL();
}

export function uploadImage(file: File) {
    return uploadFile(file).then(getURL).then(url => { return { _id: generateDateID(), url }; });
}

export function createProject(data: IProject) {
    if (!!data._id) {
        return Axios.put('/projects', data, config.credentials);
    }
    return Axios.post('/projects', data, config.credentials);
}


export function deleteProject(id: string) {
    return Axios.delete(`/projects`, { data: { id }, withCredentials: true });
}