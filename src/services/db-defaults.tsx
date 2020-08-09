import Axios from "axios";
import config from './../configs/dbConfig';
import IAbout from "../interfaces/IAbout";
import ISkills from "../interfaces/ISkills";
import IProject from "../interfaces/IProject";
import { responseTransmutation } from "../utils/utils";
import IMainUser from "../interfaces/IMainUser";

Axios.create({ baseURL: `${config.port}/api` });

/**
 * Get default about data
 * 
 * @returns {Promise}
 */
export function getDefaultAbout(): Promise<IAbout | null> {
    return Axios.get(`/defaults/about`)
        .then(responseTransmutation);
}

/**
 * Get default skills data
 * 
 * @returns {Promise}
 */
export function getDefaultSkills(): Promise<ISkills | null> {
    return Axios.get(`/defaults/skills`)
        .then(responseTransmutation);
}

/**
 * Get default projects
 * 
 * @returns {Promise}
 */
export function getDefaultProjects(): Promise<IProject[]> {
    return Axios.get(`/defaults/projects`)
        .then(responseTransmutation);
}

/**
 * Get data for project by id
 * 
 * @param {String} id
 * 
 * @returns {Promise}
 */
export function getDefaultProjectByID(id: string): Promise<IProject> {
    return Axios.get(`/defaults/projects/${id}`)
        .then(responseTransmutation);
}

/**
 * Get default main data
 * 
 * @returns {Promise}
 */
export function getDefaultMainInfo(): Promise<IMainUser | null> {
    return Axios.get(`/defaults`)
        .then(responseTransmutation);
}