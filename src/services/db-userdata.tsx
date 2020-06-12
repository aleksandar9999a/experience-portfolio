import config from './../configs/dbConfig';
import Axios from 'axios';
import ISkills from '../interfaces/ISkills';
import IMainUser from '../interfaces/IMainUser';
import IAbout from '../interfaces/IAbout';

export function updateAuthUserdata(userdata: IMainUser) { return Axios.put(`/auth`, userdata, config.credentials); }
export function updateAuthSkills(data: ISkills) {
    if (!data._id) {
        return Axios.post(`/skills`, data, config.credentials);
    }
    return Axios.put(`/skills`, data, config.credentials);
}
export function updateAuthAbout(data: IAbout) {
    if (!data._id) {
        return Axios.post(`/about`, data, config.credentials);
    }
    return Axios.put(`/about`, data, config.credentials);
}
export function getAuthSkills() { return Axios.get(`/skills`, config.credentials); }
export function getAuthAbout() { return Axios.get(`/about`, config.credentials); }
