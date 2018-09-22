import { combineReducers } from 'redux';
import auth from './auth.js';
import flashMessages from './flashMessages.js';
import rides from './rides.js';


export default combineReducers({
    flashMessages,
    auth,
    rides,
});
