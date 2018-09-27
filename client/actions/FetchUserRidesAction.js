import axios from 'axios';
import config from '../config';

const USER_RIDES = 'USER_RIDES';

const userRides = ( userRides ) => {
    return {
        type: USER_RIDES,
        userRides
    };
};

const fetchUserRides = () => {
    return dispatch => {
        return axios.get(`${config.apiUrl}/api/v1/user/rides`).then(
            response => {
                dispatch(userRides(response.data.ride));
            }
        ).catch(
            error => {
                throw(error);
            }
        );
    };
};

export {
    USER_RIDES,
    userRides,
    fetchUserRides
};
