import storage from './firebase';
import config from './../configs/dbConfig';
import Axios from 'axios';
import IProject from '../interfaces/IProject';
import { generateCommand, generateDateID } from '../utils/utils';

/**
 * Upload File
 * 
 * @param {File} file 
 * @param {String} id
 * 
 * @returns {Promise} 
 */
function uploadFile(file: File, id: string) {
    return storage
        .ref(`images/${id}`)
        .put(file);
}

/**
 * Delete file
 * 
 * @param {String} id
 * 
 * @returns {Promise} 
 */
export function deleteFile(id: string) {
    return storage
        .ref(`images/${id}`)
        .delete();
}

/**
 * Get url from snapshot
 * 
 * @param {UploadTaskSnapshot} shot
 * 
 * @returns {Promise} 
 */
function getURL(shot: firebase.storage.UploadTaskSnapshot) {
    return shot.ref.getDownloadURL();
}

/**
 * Get private projects
 * 
 * @returns {Promise} 
 */
export function getAuthProjects() {
    return Axios.get(`/projects`, config.credentials);
}

/**
 * Upload Image
 * 
 * @param {File} file 
 * 
 * @returns {Promise}
 */
export function uploadImage(file: File) {
    const _id = generateDateID(file.name);
    return uploadFile(file, _id)
        .then(getURL)
        .then(url => {
            return { _id, url };
        });
}

/**
 * Create Project
 * 
 * @param {Object} data
 * 
 * @returns {Promise} 
 */
export function createProject(data: IProject) {
    const command = generateCommand(data);
    return Axios[command]('/projects', data, config.credentials);
}

/**
 * Delete Project
 * 
 * @param {String} id
 * 
 * @returns {Promise} 
 */
export function deleteProject(id: string) {
    return Axios.delete(`/projects`, { data: { id }, withCredentials: true });
}