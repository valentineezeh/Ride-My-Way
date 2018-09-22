import { combineReducers } from 'redux';
import auth from './auth.js';
import flashMessages from './flashMessages.js';


export default combineReducers({
    flashMessages,
    auth,
});
