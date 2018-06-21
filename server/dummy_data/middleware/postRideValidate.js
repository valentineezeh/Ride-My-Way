import validator from 'validator';

class PostRideValidator{
    static postRideValidator (req, res) {
        if (!validator.isAlpha(req.body.name.toString())) {
            return res.send({
             valid: false,
             status: 400,
             message: 'Name should be alphabetic..'
           });
         }
        if (req.body.name === undefined || req.body.name.toString().trim() === '') {
            return res.send({
              valid: false,
              status: 400,
              message: 'Name should not be empty...'
            });
        }
        if (req.body.from === undefined || req.body.from.toString().trim() === '') {
            return res.send({
              valid: false,
              status: 400,
              message: 'Destination start point should not be empty...'
            });
        }
        if (req.body.to === undefined || req.body.to.toString().trim() === '') {
            return res.send({
              valid: false,
              status: 400,
              message: 'Destination stop point should not be empty...'
            });
        }
        if (req.body.departure_time === undefined || req.body.departure_time.toString().trim() === '' ) {
            return res.send({
              valid: false,
              status: 400,
              message: 'Destination time should not be empty...'
            });
        }
    }
}

export default PostRideValidator;
