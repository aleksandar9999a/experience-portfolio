import config from './../configs/dbConfig';
import axios from 'axios-observable';
import baseAxios from 'axios';
import DBAboutResponse from '../interfaces/DBAboutResponse';
import DBSkillsResponse from '../interfaces/DBSkillsResponse';
import DBMainUserResponse from '../interfaces/DBMainUserResponse';
import DBUserResponse from '../interfaces/DBUserResponse';
import { BehaviorSubject } from 'rxjs';

axios.defaults.baseURL = `${config.port}/api`;
axios.interceptors.response.use(function (res) {
    if (res.data === '') {
        res.data = null;
    }
    return res.data;
  }, function (err) {
    return Promise.reject(err);
  });

export let auth = new BehaviorSubject<any>(null);
getUserdata();

export function getAbout() {
    return axios.get<DBAboutResponse>(`/about`, config.credentials);
}

export function getSkills() {
    return axios.get<DBSkillsResponse>(`/skills`, config.credentials);
}

export function getMainInfo() {
    return axios.get<DBMainUserResponse>(`/auth/main`, config.credentials);
}

export function getUserdata() {
    return baseAxios.get<DBUserResponse>(`/auth`, config.credentials).then(user => {
        auth.next(user);
        return user;
    });
}

export function logout() {
    return baseAxios.get(`/auth/logout`, config.credentials).then(user => {
        auth.next(user);
        return user;
    }).catch(console.error);
}

export function submitLogin(loginData: { email: string; password: string; }) {
    return baseAxios.post(`/auth/login`, loginData, config.credentials).then(user => {
        auth.next(user);
        return user;
    }).catch(console.error);
}

export function updateUserdata(userdata: DBMainUserResponse) {
    return baseAxios.put<DBMainUserResponse>(`/auth`, userdata, config.credentials).catch(console.error);
}

export function updateSkills(data: DBSkillsResponse) {
    return baseAxios.put<DBSkillsResponse>(`/skills`, data, config.credentials).catch(console.error);
}