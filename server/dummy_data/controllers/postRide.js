import ride from '../model/db';

const data = ride;

/**
 * @class PostRide
 * @classdesc controller class that post a ride
 */

class PostRide{
    /**
   *@returns {object} data
   * @param {*} req
   * @param {*} res
   */
    static newRide(req, res){
        data.push({
            id: data.length + 1,
            name: req.body.name,
            from: req.body.from,
            to: req.body.to,
            departure_time: req.body.departure_time,
            ride_request: [],
        });
        res.status(201).json({
            message: 'Success!! Ride has been Created. ',
            rides: data,

        });
    }
}

export default PostRide;