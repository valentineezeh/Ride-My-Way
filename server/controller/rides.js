import client from '../db/index';

class RidesController{
    static getAllRides(req, res, next){
        client.query('select * from rides', (err, data) => {
            if (err){
                res.status(500).json({
                    success: false,
                    message: 'could not establish database connection.'
                });
            }
            res.status(200).json({
                success: true,
                rides: data.rows
            });
        });  
    }
    static getARide(req, res){
        client.query('SELECT * FROM rides WHERE id = $1', [parseInt(req.params.rideId, 10)], (err, data)=>{
            if(err){
                return res.status(500).json({
                    message: 'could not establish database connection.'
                });
            }
            if(data.rowCount > 0){
                return res.status(200).json({
                    success: true,
                    ride: data.rows[0]
                });
                
            }else{
                return res.status(404).json({
                    message: 'Ride does not exist.'
                });
            }
        });
    }

    static getUserRide(req, res){
        client.query('SELECT * FROM rides WHERE userId = $1', [ req.decoded.userId ], (err, data) => {
            if(err){
                return res.status(500).json({
                    message: 'could not establish database connection'
                });
            }
            if(data.rowCount > 0){
                return res.status(200).json({
                    success: true,
                    ride: data.rows
                }); 
            }else{
                return res.status(404).json({
                    message: 'You are yet to create a ride.'
                });
            }
        });
    }

    static postRide (req, res, next) {
        const text = 'INSERT INTO rides(startPoint, stopPoint, departureTime, departureDate, userId, created_at) VALUES ($1, $2, $3, $4, $5, Now()) RETURNING *';
        const values = [
            req.body.startPoint,
            req.body.stopPoint,
            req.body.departureTime,
            new Date(req.body.departureDate).toISOString(),
            req.decoded.userId
        ];
        client.query(text, values, (err, data) => {
            if(err) return res.status(500).json({
                success: false,
                message: 'Internal Server error',
                error: next(err.message)
            });
            res.status(201).json({
                success: true,
                message: 'Ride have been Created',
                data: data.rows[0]
            });
        });
    }

}
export default RidesController;