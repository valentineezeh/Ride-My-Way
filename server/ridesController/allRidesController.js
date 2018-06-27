import db from '../db';

class GetAllRides{
    static getAllRides(req, res, next){
        db.any("select * from rides")
        .then(data => {
            res.status(200).json({
                status: 'success',
                rides: data,
                message: 'Retrieved All Ride List'
            })
        }).catch(err => {
            return next(err);
        })
    }
}
export default GetAllRides