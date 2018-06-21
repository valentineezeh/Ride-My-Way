class RideRequestValidation{
    static rideRequest(req, res, next){
        const error = [];
        if (req.body.ride_request === undefined || req.body.ride_request.toString().trim() === '') {
            return res.send({
                valid: false,
                status: 400,
                message: 'Ride Request should not be empty...'
              });
        }
    }
}
export default RideRequestValidation;