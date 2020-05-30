import config from './../configs/dbConfig';
import Axios from 'axios';
import AxiosObs from 'axios-observable';
import DBSkillsResponse from '../interfaces/DBSkillsResponse';
import DBMainUserResponse from '../interfaces/DBMainUserResponse';

Axios.defaults.baseURL = `${config.port}/api`;

export function updateUserdata(userdata: DBMainUserResponse) {
    return Axios.put(`/auth`, userdata, config.credentials).catch(console.error);
}

export function updateSkills(data: DBSkillsResponse) {
    return Axios.put(`/skills`, data, config.credentials).catch(console.error);
}

export function getSkills() {
    return AxiosObs.get(`/skills`, config.credentials);
}
