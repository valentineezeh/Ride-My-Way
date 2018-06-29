class RideRequestValidation{
    static rideRequest(req, res, next){
        if (req.body.rideRequest === undefined || req.body.rideRequest.toString().trim() === '') {
            return res.send({
                valid: false,
                status: 400,
                message: 'Ride Request should not be empty...'
              });
        }
        next()
    }
}
export default RideRequestValidation;