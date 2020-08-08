import config from './../configs/dbConfig';
import Axios from 'axios';
import ISkills from '../interfaces/ISkills';
import IMainUser from '../interfaces/IMainUser';
import IAbout from '../interfaces/IAbout';
import { generateCommand } from '../utils/utils';


export function updateAuthUserdata(userdata: IMainUser) {
    return Axios.put(`/auth`, userdata, config.credentials);
}

export function updateAuthSkills(data: ISkills) {
    const command = generateCommand(data);
    return Axios[command](`/skills`, data, config.credentials);
}

export function updateAuthAbout(data: IAbout) {
    const command = generateCommand(data);
    return Axios[command](`/about`, data, config.credentials);
}

export function getAuthSkills() {
    return Axios.get(`/skills`, config.credentials);
}

export function getAuthAbout() {
    return Axios.get(`/about`, config.credentials);
}
