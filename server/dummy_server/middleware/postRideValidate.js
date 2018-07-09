class PostRideValidator{
    static postRideValidator (req, res, next) { 
        if (req.body.name === undefined || req.body.name.toString().trim() === '') {
            return res.status(400).send({
              valid: false,
              message: 'Name should not be empty...'
            });
        }
        if (req.body.from === undefined || req.body.from.toString().trim() === '') {
            return res.status(400).send({
              valid: false,
              message: 'Destination start point should not be empty...'
            });
        }
        if (req.body.to === undefined || req.body.to.toString().trim() === '') {
            return res.status(400).send({
              valid: false,
              message: 'Destination stop point should not be empty...'
            });
        }
        if (req.body.departure_time === undefined || req.body.departure_time.toString().trim() === '' ) {
            return res.status(400).send({
              valid: false,
              message: 'Destination time should not be empty...'
            });
        }
        next()
    }
}

export default PostRideValidator;
