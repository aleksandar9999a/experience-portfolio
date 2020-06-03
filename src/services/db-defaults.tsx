import Axios from "axios";
import config from './../configs/dbConfig';

Axios.create({
    baseURL: `${config.port}/api`
})

export function getAbout() {
    return Axios.get(`/defaults/about`);
}

export function getSkills() {
    return Axios.get(`/defaults/skills`);
}

export function getProjects() {
    return Axios.get(`/defaults/projects`);
}

export function getMainInfo() {
    return Axios.get(`/defaults`);
}