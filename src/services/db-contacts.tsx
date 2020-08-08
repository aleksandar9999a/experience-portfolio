import Axios from 'axios';
import IEmail from '../interfaces/IEmail';
import config from './../configs/dbConfig';

export function sendEmail(data: IEmail) {
    return Axios.post('/contact', data);
}

export function getEmail() {
    return Axios.get('/contact', config.credentials);
}

export function deleteEmail(id: string) {
    return Axios.delete('/contact', { data: { id }, withCredentials: true });
}

export function updateEmail(data: IEmail) {
    return Axios.put('/contact', data, config.credentials);
}