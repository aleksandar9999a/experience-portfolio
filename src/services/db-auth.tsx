import { BehaviorSubject } from "rxjs";
import Axios from "axios";
import config from './../configs/dbConfig';
import ILoginData from "../interfaces/ILoginData";

Axios.defaults.baseURL = `${config.port}/api`;

export let auth = new BehaviorSubject<any>(null);
getUserdata();

export function getUserdata() {
    return Axios.get(`/auth`, config.credentials).then(user => {
        auth.next(user);
        return user;
    });
}

export function logout() {
    return Axios.get(`/auth/logout`, config.credentials).then(user => {
        auth.next(user);
        return user;
    }).catch(console.error);
}

export function submitLogin(loginData: ILoginData) {
    return Axios.post(`/auth/login`, loginData, config.credentials).then(user => {
        auth.next(user);
        return user;
    }).catch(console.error);
}