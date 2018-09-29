import { USER_RIDES } from '../actions/FetchUserRidesAction.js';
import { RIDE_CREATED } from '../actions/CreateRideAction.js';


export default function userRides(state = [], action = {}){
    switch(action.type) {
    case USER_RIDES:
        return action.userRides;
    case RIDE_CREATED: 
        return action.ride;
    default: return state;
    }
}