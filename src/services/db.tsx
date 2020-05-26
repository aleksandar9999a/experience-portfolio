import config from './../configs/dbConfig';
import axios from 'axios-observable';

export function getAbout() {
    return axios.get(`${config.port}/api/pages/about`, config.credentials);
}

export function getSkills() {
    return axios.get(`${config.port}/api/pages/skills`, config.credentials);
}

export function getMainInfo() {
    return axios.get(`${config.port}/api/auth/`, config.credentials)
}