import { USER_RIDES } from '../actions/FetchUserRidesAction.js';

export default function userRides(state = [], action = {}){
    switch(action.type) {
    case USER_RIDES:
        return action.userRides;
    default: return state;
    }
}