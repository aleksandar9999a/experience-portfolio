import config from './../configs/dbConfig';
import axios from 'axios-observable';
import baseAxios from 'axios';

export function getAbout() {
    return axios.get(`${config.port}/api/about`, config.credentials);
}

export function getSkills() {
    return axios.get(`${config.port}/api/skills`, config.credentials);
}

export function getMainInfo() {
    return axios.get(`${config.port}/api/auth/`, config.credentials)
}

export function submitLogin(loginData: { email: string; password: string; }) {
    return baseAxios.post(`${config.port}/api/auth/login`, loginData, config.credentials)
}