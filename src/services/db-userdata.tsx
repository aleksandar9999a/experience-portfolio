import config from './../configs/dbConfig';
import Axios from 'axios';
import ISkills from '../interfaces/ISkills';
import IMainUser from '../interfaces/IMainUser';
import IAbout from '../interfaces/IAbout';
import { generateCommand } from '../utils/utils';

/**
 * Update userdata
 * 
 * @param {Object} userdata 
 * 
 * @returns {Promise}
 */
export function updateAuthUserdata(userdata: IMainUser) {
    return Axios.put(`/auth`, userdata, config.credentials);
}

/**
 * Upsert skills
 * 
 * @param {Object} data
 * 
 * @returns {Promise} 
 */
export function updateAuthSkills(data: ISkills) {
    const command = generateCommand(data);
    return Axios[command](`/skills`, data, config.credentials);
}

/**
 * Upsert about
 * 
 * @param {Object} data
 * 
 * @returns {Promise} 
 */
export function updateAuthAbout(data: IAbout) {
    const command = generateCommand(data);
    return Axios[command](`/about`, data, config.credentials);
}

/**
 * Get skills
 * 
 * @returns {Promise} 
 */
export function getAuthSkills() {
    return Axios.get(`/skills`, config.credentials);
}

/**
 * Get about
 * 
 * @returns {Promise} 
 */
export function getAuthAbout() {
    return Axios.get(`/about`, config.credentials);
}
