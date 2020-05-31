import Axios from "axios";
import config from './../configs/dbConfig';

Axios.defaults.baseURL = `${config.port}/api`;

export function getAbout() {
    return Axios.get(`/defaults/about`, config.credentials);
}

export function getSkills() {
    return Axios.get(`/defaults/skills`, config.credentials);
}

export function getMainInfo() {
    return Axios.get(`/defaults`, config.credentials);
}