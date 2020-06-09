import Axios from "axios";
import config from './../configs/dbConfig';

Axios.create({ baseURL: `${config.port}/api` });

export function getDefaultAbout() { return Axios.get(`/defaults/about`); }
export function getDefaultSkills() { return Axios.get(`/defaults/skills`); }
export function getDefaultProjects() { return Axios.get(`/defaults/projects`); }
export function getDefaultProjectByID(id: string) { return Axios.get(`/defaults/projects/${id}`); }
export function getDefaultMainInfo() { return Axios.get(`/defaults`); }