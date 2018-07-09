class PostValidation {
    static rideValidator(req, res, next) {
        if (req.body.startPoint === undefined) {
            return res.status(400).send({
                message: 'destination start point is required1'
            });
        }
        
        if (req.body.stopPoint === undefined) {
            return res.status(400).send({
                message: 'destination stop point is required'
            });
        }
        
        if (req.body.departureTime === undefined) {
            return res.status(400).send({
                message: 'departure time is required'
            });
        }
        if (req.body.departureDate === undefined) {
            return res.status(400).send({
                message: 'departure date is required'
            });
        }
        
        if (req.body.startPoint.toString().trim() === '') {
            return res.status(400).send({
                message: 'destination start point is required.'
            })
        } 
        if (req.body.stopPoint.toString().trim() === '') {
            return res.status(400).send({
                message: 'destination stop point is required.'
            })
        }
        if (req.body.departureTime.toString().trim() === '') {
            return res.status(400).send({
                message: 'departure time is required.'
            })
        }
        if (req.body.departureDate.toString().trim() === '') {
            return res.status(400).send({
                message: 'departure date is required.'
            })
        }
        return next();
    }
}

export default PostValidation;
