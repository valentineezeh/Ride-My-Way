import client from '../db/index';

class RidesController{
    static getAllRides(req, res, next){
        client.query("select * from rides", (err, data) => {
            if (err) return next(err);
            res.status(200).json({
                data: data.rows
            })
        })  
    }
}
export default RidesController;