import storage from './firebase';
import config from './../configs/dbConfig';
import Axios from 'axios';
import IProject from '../interfaces/IProject';
import { generateCommand, generateDateID, responseTransmutation } from '../utils/utils';
import IUploadImageResponse from '../interfaces/IUploadImageResponse';

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
export function deleteFile(id: string): Promise<any> {
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
function getURL(shot: firebase.storage.UploadTaskSnapshot): Promise<any> {
    return shot.ref.getDownloadURL();
}

/**
 * Get private projects
 * 
 * @returns {Promise} 
 */
export function getAuthProjects(): Promise<IProject[]> {
    return Axios.get(`/projects`, config.credentials)
    .then(responseTransmutation);
}

/**
 * Upload Image
 * 
 * @param {File} file 
 * 
 * @returns {Promise}
 */
export function uploadImage(file: File): Promise<IUploadImageResponse> {
    const _id = generateDateID(file.name);
    return uploadFile(file, _id)
        .then(getURL)
        .then(url => {
            return { _id, url };
        });
}

/**
 * Upsert Project
 * 
 * @param {Object} data
 * 
 * @returns {Promise} 
 */
export function upsertProject(data: IProject): Promise<any> {
    const command = generateCommand(data);
    return (Axios as any)[command]('/projects', data, config.credentials);
}

/**
 * Delete Project
 * 
 * @param {String} id
 * 
 * @returns {Promise} 
 */
export function deleteProject(id: string): Promise<any> {
    return Axios.delete(`/projects`, { data: { id }, withCredentials: true });
}