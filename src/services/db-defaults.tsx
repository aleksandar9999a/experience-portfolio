import Axios from "axios";
import config from './../configs/dbConfig';

Axios.create({ baseURL: `${config.port}/api` });

/**
 * Get default about data
 * 
 * @returns {Promise}
 */
export function getDefaultAbout() {
    return Axios.get(`/defaults/about`);
}

/**
 * Get default skills data
 * 
 * @returns {Promise}
 */
export function getDefaultSkills() {
    return Axios.get(`/defaults/skills`);
}

/**
 * Get default projects
 * 
 * @returns {Promise}
 */
export function getDefaultProjects() {
    return Axios.get(`/defaults/projects`);
}

/**
 * Get data for project by id
 * 
 * @param {String} id
 * 
 * @returns {Promise}
 */
export function getDefaultProjectByID(id: string) {
    return Axios.get(`/defaults/projects/${id}`);
}

/**
 * Get default main data
 * 
 * @returns {Promise}
 */
export function getDefaultMainInfo() {
    return Axios.get(`/defaults`);
}