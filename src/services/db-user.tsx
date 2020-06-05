import config from './../configs/dbConfig';
import Axios from 'axios';
import ISkills from '../interfaces/ISkills';
import IMainUser from '../interfaces/IMainUser';
import IAbout from '../interfaces/IAbout';
import IProject from '../interfaces/IProject';
import storage from './firebase';
import ImageData from '../interfaces/IImageData';

function generateDateID() {
    const date = new Date();
    return `${date.getFullYear()}${date.getMonth()}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getMilliseconds()}`;
}

function getRef(title: string, date: string, image: ImageData, index: number) {
    return storage.ref(`images/${title}${date}${index}`).put(image.file);
}

function getURL(shot: firebase.storage.UploadTaskSnapshot) {
    return shot.ref.getDownloadURL();
}

export function createProject(data: IProject) {
    const dateId = generateDateID();
    return Promise.all(data.images.map(getRef.bind(undefined, data.title, dateId)))
        .then(snapshots => Promise.all(snapshots.map(getURL)))
        .then(urls => {
            const images = urls.map((url, i) => { return { url, id: i } });
            const project = {
                title: data.title,
                description: data.description,
                link: data.link,
                images
            }
            return Axios.post('/projects', project, config.credentials)
        })
        .catch(console.error);
}

export function updateAuthUserdata(userdata: IMainUser) {
    return Axios.put(`/auth`, userdata, config.credentials);
}

export function updateAuthSkills(data: ISkills) {
    return Axios.put(`/skills`, data, config.credentials);
}

export function updateAuthAbout(data: IAbout) {
    return Axios.put(`/about`, data, config.credentials);
}

export function getAuthSkills() {
    return Axios.get(`/skills`, config.credentials);
}

export function getAuthAbout() {
    return Axios.get(`/about`, config.credentials);
}

export function getAuthProjects() {
    return Axios.get(`/projects`, config.credentials);
}
