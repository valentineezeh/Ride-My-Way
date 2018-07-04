class PostValidation {
    static rideValidator(req, res, next) {
        //console.log('START')
        if (req.body.destinationstartpoint === undefined) {
            return res.status(400).send({
                message: 'destination start point is required1'
            });
        }
        
        if (req.body.destinationstoppoint === undefined) {
            return res.status(400).send({
                message: 'destination stop point is required'
            });
        }
        
        if (req.body.departuretime === undefined) {
            return res.status(400).send({
                message: 'departure time is required'
            });
        }
        
        if (req.body.destinationstartpoint.toString().trim() === '') {
            return res.status(400).send({
                message: 'destination start point is required.'
            })
        }
        //console.log('========================================')
        //console.log('STOP')
        if (req.body.destinationstoppoint.toString().trim() === '') {
            return res.status(400).send({
                message: 'destination stop point is required.'
            })
        }
        if (req.body.departuretime.toString().trim() === '') {
            return res.status(400).send({
                message: 'destination time point is required.'
            })
        }
        // if (error.length > 0) {
        //     return res.status(400).send({
        //         message: error
        //     });
        // }
        return next();
    }
}

export default PostValidation;
