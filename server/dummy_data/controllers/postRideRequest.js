import ride from '../model/db';
const data = ride;
/**
 * @class PostRideRequest
 * @classdesc controller class that post a ride request.
 */
class PostRideRequest {
    static rideRequest(req, res){
        const {rideId} = req.params;
        data.map((ride) => {
            if(parseInt(rideId, 10) == ride.id){
                ride.ride_request.push(req.body.ride_request);
                return res.status(201).json({
                    message: `Success!! Your request to join ride with ID: ${ride.id} has be posted..`,
                    ride_request: ride,
                });
            }
        });
        return res.status(200).json({
            error: true,
            message:'Ride does not exist..'
        });
    }
}
export default PostRideRequest;