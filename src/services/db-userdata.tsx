import config from './../configs/dbConfig';
import Axios from 'axios';
import ISkills from '../interfaces/ISkills';
import IMainUser from '../interfaces/IMainUser';
import IAbout from '../interfaces/IAbout';
import { generateCommand, responseTransmutation } from '../utils/utils';

/**
 * Update userdata
 * 
 * @param {Object} userdata 
 * 
 * @returns {Promise}
 */
export function updateAuthUserdata(userdata: IMainUser): Promise<any> {
    return Axios.put(`/auth`, userdata, config.credentials);
}

/**
 * Upsert skills
 * 
 * @param {Object} data
 * 
 * @returns {Promise} 
 */
export function updateAuthSkills(data: ISkills): Promise<any> {
    const command = generateCommand(data);
    return (Axios as any)[command](`/skills`, data, config.credentials);
}

/**
 * Upsert about
 * 
 * @param {Object} data
 * 
 * @returns {Promise} 
 */
export function updateAuthAbout(data: IAbout): Promise<any> {
    const command = generateCommand(data);
    return (Axios as any)[command](`/about`, data, config.credentials);
}

/**
 * Get skills
 * 
 * @returns {Promise} 
 */
export function getAuthSkills(): Promise<ISkills | null> {
    return Axios.get(`/skills`, config.credentials)
        .then(responseTransmutation);
}

/**
 * Get about
 * 
 * @returns {Promise} 
 */
export function getAuthAbout(): Promise<IAbout | null> {
    return Axios.get(`/about`, config.credentials)
        .then(responseTransmutation);
}
