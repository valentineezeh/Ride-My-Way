import { combineReducers } from 'redux';
import auth from './auth.js';
import flashMessages from './flashMessages.js';
import rides from './rides.js';
import userRides from './userRides';


export default combineReducers({
    flashMessages,
    auth,
    rides,
    userRides,
});
