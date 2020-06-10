import storage from './firebase';
import config from './../configs/dbConfig';
import Axios from 'axios';
import IProject from '../interfaces/IProject';

function generateDateID() {
    const date = new Date();
    return `${date.getFullYear()}${date.getMonth()}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getMilliseconds()}`;
}

function uploadFile(file: File, id: string) {
    return storage.ref(`images/${id}`).put(file);
}

export function deleteFile(id: string) {
    return storage.ref(`images/${id}`).delete();
}

function getURL(shot: firebase.storage.UploadTaskSnapshot) {
    return shot.ref.getDownloadURL();
}

export function getAuthProjects() { return Axios.get(`/projects`, config.credentials); }

export function uploadImage(file: File) {
    const _id = `${generateDateID()}${file.name}`;
    return uploadFile(file, _id).then(getURL).then(url => { return { _id, url }; });
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