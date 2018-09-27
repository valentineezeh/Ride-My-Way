import axios from 'axios';
import jwt from 'jsonwebtoken';
import config from '../config';
import { SET_CURRENT_USER } from './types.js';
import setAuthorizationToken from '../utils/setAuthorizationToken.js';

export function setCurrentUser(user){
    return{
        type: SET_CURRENT_USER,
        user
    };
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    };
}

export function userLoginRequest(userLoginData) {
    return (dispatch) => {
        return axios.post(`${config.apiUrl}/api/v1/auth/login`, userLoginData).then(
            res => {
                const token = res.data.data;
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(jwt.decode(token)));
            }
        ); 
    };
}