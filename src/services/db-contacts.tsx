import Axios from 'axios';
import IEmail from '../interfaces/IEmail';
import config from './../configs/dbConfig';
import { responseTransmutation } from '../utils/utils';

/**
 * Send Email
 * 
 * @param {Object} data 
 * 
 * @returns {Promise}
 */
export function sendEmail(data: IEmail): Promise<any> {
    return Axios.post('/contact', data);
}

/**
 * Get Email
 * 
 * @returns {Promise}
 */
export function getEmail(): Promise<IEmail[]> {
    return Axios.get('/contact', config.credentials)
        .then(responseTransmutation);
}

/**
 * Delete Email
 * 
 * @param {String} id
 * 
 * @returns {Promise} 
 */
export function deleteEmail(id: string): Promise<any> {
    return Axios.delete('/contact', { data: { id }, withCredentials: true });
}

/**
 * Update Email
 * 
 * @param {Object} data 
 * 
 * @returns {Promise}
 */
export function updateEmail(data: IEmail): Promise<any> {
    return Axios.put('/contact', data, config.credentials);
}