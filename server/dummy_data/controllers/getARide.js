import ride from '../model/db';
const data = ride;
/**
 * @class GetSingleRide
 * @classdesc controller class to retrieve a ride
 */
class GetSingleRide {
    /**
   *@returns {object} data
   * @param {*} req
   * @param {*} res
   */
    static singleRide(req, res){
        const {rideId} = req.params;
        let newRide = [];
        data.map((ride) => {
            if (parseInt(rideId, 10) == ride.id){
                newRide.push(ride);
            }
        });
        if (newRide.length == 0){
            return res.status(404).json({
                message: 'Ride does not exist.'
            })
        }else{
            return res.status(200).json(newRide);
        }
    }
}
export default GetSingleRide;