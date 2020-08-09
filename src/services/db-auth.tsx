import { BehaviorSubject } from "rxjs";
import Axios from "axios";
import config from './../configs/dbConfig';
import ILoginData from "../interfaces/ILoginData";

Axios.defaults.baseURL = `${config.port}/api`;

export let auth = new BehaviorSubject<any>(null);
getUserdata();

/**
 * Get data for current user when it is logged
 * 
 * @returns {Promise}
 */
export function getUserdata(): Promise<any> {
    return Axios.get(`/auth`, config.credentials)
        .then(res => {
            auth.next(res.data || null);
            return res.data;
        }).catch(console.error);
}

/**
 * Log out
 * 
 * @returns {Promise}
 */
export function logout(): Promise<any> {
    return Axios.get(`/auth/logout`, config.credentials)
        .then(res => {
            auth.next(res.data || null);
            return res.data;
        })
        .catch(console.error);
}

/**
 * Submit login
 * 
 * @param {Object} loginData 
 * 
 * @returns {Promise}
 */
export function submitLogin(loginData: ILoginData): Promise<any> {
    return Axios.post(`/auth/login`, loginData, config.credentials)
        .then(res => {
            auth.next(res.data || null);
            return res.data;
        });
}