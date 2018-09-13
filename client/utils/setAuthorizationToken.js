import axios from 'axios';
//import jwt from 'jsonwebtoken';

export default function setAuthorizationToken(token) {
    if(token){
        //console.log(token);
        //console.log(axios.defaults.headers.common['Authorization'] = "Bearer " + token)
        return axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
} 
