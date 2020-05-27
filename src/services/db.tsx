import config from './../configs/dbConfig';
import axios from 'axios-observable';
import baseAxios from 'axios';

axios.defaults.baseURL = `${config.port}/api`;

export function getAbout() {
    return axios.get(`/about`, config.credentials);
}

export function getSkills() {
    return axios.get(`/skills`, config.credentials);
}

export function getMainInfo() {
    return axios.get(`/auth`, config.credentials)
}

export function submitLogin(loginData: { email: string; password: string; }) {
    return baseAxios.post(`/auth/login`, loginData, config.credentials)
}