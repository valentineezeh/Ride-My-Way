import ride from '../model/db';

/**
 * @class PostRideRequest
 * @classdesc controller class that post a ride request.
 */
class PostRideRequest {
    static rideRequest(req, res){
        const {rideId} = req.params;
        const {request} = req.body
        for (const [key] of Object.entries(ride)){
            if(ride[key].id === parseInt(rideId, 10)){
                ride[key].ride_request.push(request);
                return res.status(201).json({
                     message: `Success! Ride Request have been added.`,
                    ride: ride[key].ride_request
                })
            }
        }
        return res.status(404).json({
            message: 'center is not found...'
          }); 
            }
       
    }
export default PostRideRequest;