import ride from '../model/db';
const data = ride;
/**
 * @class AllRides
 * @classdesc controller class to get all rides
 */
class AllRides {
    /**
   *@returns {object} data
   * @param {*} req
   * @param {*} res
   */
    static getAllRides(req, res){
        res.status(200).json({
            error: false,
            rides: data,
        });
    }
}
export default AllRides;