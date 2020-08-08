import storage from './firebase';
import config from './../configs/dbConfig';
import Axios from 'axios';
import IProject from '../interfaces/IProject';
import { generateCommand, generateDateID } from '../utils/utils';

function uploadFile(file: File, id: string) {
    return storage
        .ref(`images/${id}`)
        .put(file);
}

export function deleteFile(id: string) {
    return storage
        .ref(`images/${id}`)
        .delete();
}

function getURL(shot: firebase.storage.UploadTaskSnapshot) {
    return shot.ref.getDownloadURL();
}

export function getAuthProjects() {
    return Axios.get(`/projects`, config.credentials);
}

export function uploadImage(file: File) {
    const _id = generateDateID(file.name);
    return uploadFile(file, _id)
        .then(getURL)
        .then(url => {
            return { _id, url };
        });
}

export function createProject(data: IProject) {
    const command = generateCommand(data);
    return Axios[command]('/projects', data, config.credentials);
}

export function deleteProject(id: string) {
    return Axios.delete(`/projects`, { data: { id }, withCredentials: true });
}