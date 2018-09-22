import { ALL_RIDES } from '../actions/FetchRidesAction.js';


export default function allRides(state = [], action = {}){
    switch(action.type) {
    case ALL_RIDES: 
        return action.rides;
    default: return state;
    }
}