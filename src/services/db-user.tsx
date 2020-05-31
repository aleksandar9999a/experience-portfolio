import config from './../configs/dbConfig';
import Axios from 'axios';
import ISkills from '../interfaces/ISkills';
import IMainUser from '../interfaces/IMainUser';
import IAbout from '../interfaces/IAbout';

Axios.defaults.baseURL = `${config.port}/api`;

export function updateUserdata(userdata: IMainUser) {
    return Axios.put(`/auth`, userdata, config.credentials).catch(console.error);
}

export function updateSkills(data: ISkills) {
    return Axios.put(`/skills`, data, config.credentials).catch(console.error);
}

export function updateAbout(data: IAbout) {
    return Axios.put(`/about`, data, config.credentials).catch(console.error);
}

export function getSkills() {
    return Axios.get(`/skills`, config.credentials);
}

export function getAbout() {
    return Axios.get(`/about`, config.credentials);
}
