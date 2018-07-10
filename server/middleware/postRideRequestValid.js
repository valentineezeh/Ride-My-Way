class RideRequestValidation{
    static rideRequest(req, res, next){
        if (req.body.status === undefined || req.body.status.toString().trim() === '') {
            return res.status(400).send({
                message: 'status should not be empty.'
              });
        }
        if (req.body.status !== "accept" && req.body.status !== 'reject') {
            return res.status(400).send({
                message: 'status can either be accept or reject.'
              });
        }
        next()
    }
}
export default RideRequestValidation;