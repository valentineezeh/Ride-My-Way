class RideRequestValidation{
    static rideRequest(req, res, next){
        if (req.body.accept === undefined || req.body.accept.toString().trim() === '') {
            return res.status(400).send({
                message: 'Accept should not be empty.'
              });
        }
        if (req.body.accept !== "true" && req.body.accept !== "false") {
            console.log(req.body.accept)
            return res.status(400).send({
                message: 'Accept can either be true or false.'
              });
        }
        if (req.body.reject === undefined || req.body.reject.toString().trim() === '') {
            return res.status(400).send({
                message: 'Reject should not be empty.'
              });
        }
        if (req.body.reject !== 'true' && req.body.reject !== 'false') {
            return res.status(400).send({
                message: 'Reject can either be true or false.'
              });
        }
        next()
    }
}
export default RideRequestValidation;