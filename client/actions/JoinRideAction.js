import axios from 'axios';
import config from '../config';

export const joinRide = (rideId) => {
    return dispatch => {
        return axios.post(`${config.apiUrl}/api/v1//rides/${rideId}/requests`);
    };
};