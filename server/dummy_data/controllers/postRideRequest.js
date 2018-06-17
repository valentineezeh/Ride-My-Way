import ride from '../model/db';
const data = ride;
/**
 * @class PostRideRequest
 * @classdesc controller class that post a ride request.
 */
class PostRideRequest {
    static rideRequest(req, res){
        const {rideId} = req.params;
        let newRide = [];
        let ride_request = [];
        data.map((ride) => {
            if(parseInt(rideId, 10) == ride.id){
                ride_request.push(req.body.ride_request);
                newRide.push(ride_request)
            }
                });
            if (newRide.length == 0){
                return res.status(404).json({
                    message: 'ride does not exist..'
                })
            }
            else{
                return res.status(201).json(newRide)
            }
            }
       
    }
export default PostRideRequest;