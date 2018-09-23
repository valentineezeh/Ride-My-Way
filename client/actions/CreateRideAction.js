import axios from 'axios';

export const createRide = (rideData) => {
    return dispatch => {
        return axios.post('https://frozen-mesa-95948.herokuapp.com/api/v1/users/rides', rideData);
    };
};