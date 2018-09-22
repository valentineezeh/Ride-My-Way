import axios from 'axios';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER } from './types.js';
import setAuthorizationToken from '../utils/setAuthorizationToken.js';

export function setCurrentUser(user){
    return{
        type: SET_CURRENT_USER,
        user
    };
}

export function userSignUpRequest(userData) {
    return (dispatch) => {
        return axios.post('https://frozen-mesa-95948.herokuapp.com/api/v1/auth/signup', userData).then(
            res => {
                const token = res.data.token;
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(jwt.decode(token)));
            }
        );
    };
}
