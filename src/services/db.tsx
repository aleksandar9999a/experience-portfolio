import config from './../configs/dbConfig';
import axios from 'axios-observable';
import baseAxios from 'axios';
import DBAboutResponse from '../interfaces/DBAboutResponse';
import DBSkillsResponse from '../interfaces/DBSkillsResponse';
import DBMainUserResponse from '../interfaces/DBMainUserResponse';
import DBUserResponse from '../interfaces/DBUserResponse';

axios.defaults.baseURL = `${config.port}/api`;
axios.interceptors.response.use(function (res) {
    if (res.data === '') {
        res.data = null;
    }
    return res.data;
  }, function (err) {
    return Promise.reject(err);
  });


export function getAbout() {
    return axios.get<DBAboutResponse>(`/about`, config.credentials);
}

export function getSkills() {
    return axios.get<DBSkillsResponse>(`/skills`, config.credentials);
}

export function getMainInfo() {
    return axios.get<DBMainUserResponse>(`/auth/main`, config.credentials);
}

export function getUserInfo() {
    return axios.get<DBUserResponse>(`/auth`, config.credentials);
}

export function logout() {
    return axios.get(`/auth/logout`, config.credentials);
}

export function submitLogin(loginData: { email: string; password: string; }) {
    return baseAxios.post(`/auth/login`, loginData, config.credentials)
}