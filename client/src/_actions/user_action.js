import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    SOCKET_CONNECT,
    AUTH_SOCKET_UPDATE
} from './types';

export function loginUser(dataToSubmit){

    const request = axios.post('/api/users/login', dataToSubmit)
    .then(response => response.data)

    return{
        type: LOGIN_USER,
        payload: request
    }

}


export function registUser(dataToSubmit){

    const request = axios.post('/api/users/register', dataToSubmit)
    .then(response => response.data)

    return{
        type: REGISTER_USER,
        payload: request
    }

}


export function auth(dataToSubmit){

    const request = axios.get('/api/users/auth')
    .then(response => response.data)

    return{
        type: AUTH_USER,
        payload: request
    }

}

export function authUpdate(dataToSubmit){
    const request = axios.post("/api/users/profileUpdate", dataToSubmit)
    .then((response) => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}

export function socketReduxConnect(dataToSubmit){


    const request = dataToSubmit
    
    return {
        type: SOCKET_CONNECT,
        payload: request
    }
}

export function authSocketUpdate(dataToSubmit){

    const request = axios.post("/api/users/authSocketUpdate",dataToSubmit)
    .then(response => response.data)

    return {

        type: AUTH_SOCKET_UPDATE,
        payload: request
    }
}
