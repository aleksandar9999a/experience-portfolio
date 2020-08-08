import Axios from 'axios';
import IEmail from '../interfaces/IEmail';
import config from './../configs/dbConfig';

/**
 * Send Email
 * 
 * @param {Object} data 
 */
export function sendEmail(data: IEmail) {
    return Axios.post('/contact', data);
}

/**
 * Get Email
 * 
 * @returns {Promise}
 */
export function getEmail() {
    return Axios.get('/contact', config.credentials);
}

/**
 * Delete Email
 * 
 * @param {String} id
 * 
 * @returns {Promise} 
 */
export function deleteEmail(id: string) {
    return Axios.delete('/contact', { data: { id }, withCredentials: true });
}

/**
 * Update Email
 * 
 * @param {Object} data 
 * 
 * @returns {Promise}
 */
export function updateEmail(data: IEmail) {
    return Axios.put('/contact', data, config.credentials);
}