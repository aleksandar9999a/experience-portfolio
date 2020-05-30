import Axios from "axios-observable";
import config from './../configs/dbConfig';

Axios.defaults.baseURL = `${config.port}/api`;
Axios.interceptors.response.use(function (res) {
    if (res.data === '') {
        res.data = null;
    }
    return res.data;
}, function (err) {
    return Promise.reject(err);
});

export function getAbout() {
    return Axios.get(`/defaults/about`, config.credentials);
}

export function getSkills() {
    return Axios.get(`/defaults/skills`, config.credentials);
}

export function getMainInfo() {
    return Axios.get(`/defaults`, config.credentials);
}