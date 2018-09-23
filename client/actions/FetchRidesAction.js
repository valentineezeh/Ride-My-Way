import axios from 'axios';

export const ALL_RIDES = 'ALL_RIDES';

const allRides = ( rides ) => {

    return{
        type: ALL_RIDES,
        rides
    };
};

const fetchRides = () => {
    return dispatch => {
        return axios.get('https://frozen-mesa-95948.herokuapp.com/api/v1/rides').then( response => {
            dispatch(allRides(response.data.rides));
        }).catch( error => {
            throw(error);
        });
    };
};

export { fetchRides, allRides };