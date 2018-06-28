class PostValidation {
    static rideValidator(req, res, next) {
        const error = [];
        if (req.body.destinationstartpoint === undefined) {
            return res.status(400).send({
                msg: 'destination start point is required'
            });
        }
        if (req.body.destinationstoppoint === undefined) {
            return res.status(400).send({
                msg: 'destination stop point is required'
            });
        }
        if (req.body.departuretime === undefined) {
            return res.status(400).send({
                msg: 'departure time is required'
            });
        }
        if (req.body.destinationstartpoint.toString().trim() === '') {
            error.push('destination start point is required...');
        }
        if (req.body.destinationstoppoint.toString().trim() === '') {
            error.push('destination stop point is required.');
        }
        if (req.body.departuretime.toString().trim() === '') {
            error.push('departure time is required.');
        }
        if (error.length > 0) {
            return res.status(400).send({
                msg: error
            });
        }
        return next();
    }
}

export default PostValidation;
