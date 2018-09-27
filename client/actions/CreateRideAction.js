import axios from 'axios';
import config from '../config';

export const createRide = (rideData) => {
    return dispatch => {
        return axios.post(`${config.apiUrl}/api/v1/users/rides`, rideData);
    };
};