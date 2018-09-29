import axios from 'axios';
import config from '../config';
import RIDE_CREATED from './types';


export const rideCreated = (ride) => {
    return {
        type: RIDE_CREATED,
        ride
    };
};

export const createRide = (rideData) => {
    return dispatch => {
        return axios.post(`${config.apiUrl}/api/v1/users/rides`, rideData)
            .then(() => dispatch( rideCreated(rideData)))
            .catch( error => { error; });
    };
};