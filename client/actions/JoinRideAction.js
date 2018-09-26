import axios from 'axios';

export const joinRide = (joinRideData) => {
  return dispatch => {
    return axios.post('https://frozen-mesa-95948.herokuapp.com/api/v1//rides/:rideId/requests')
  }
}