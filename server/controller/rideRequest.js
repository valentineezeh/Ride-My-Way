import client from '../db/index';

class RideRequestController{
    static getAllRideRequest(req, res){

        const text = `SELECT rideRequests.id AS requestId, status, rides.userid AS userid, rideRequests.userid AS userid, lastname, firstname, rideid, rideRequests.created_at, rideRequests.updated_at FROM riderequests 
        INNER JOIN users ON rideRequests.userid = users.id
        INNER JOIN rides ON rideRequests.rideid = rides.id
        WHERE  rideId =$1`;
        
        client.query(text, [ parseInt(req.params.rideId, 10) ], (err, data) => {
            if(err){
                return res.status(500).json({
                    message: 'could not establish database connection.'
                });
            }
            if(req.decoded.userId !== data.rows[0].userid){
                
                return res.status(400).json({
                    success: false,
                    message: 'You can only get ride request for the rides you created.'
                });
            }
            if(data.rowCount > 0){
                return res.status(200).json({
                    success: true,
                    requests: data.rows
                });
            }else{
                return res.status(404).json({
                    success: false,
                    message: 'No ride request found.'
                });
            }
        });
    }
    static postRideRequest (req, res) {
        const text = 'SELECT * FROM rides WHERE id = $1';
        const values = [
            parseInt(req.params.rideId, 10),
        ];
        client.query(text, values, (err, data) => {
            if (data.rowCount < 1){
                return res.status(404).json({
                    success: false,
                    message: 'The requested ride offer does not exist'
                });
            }
            if (data.rows[0].userid === req.decoded.userId){
                return res.status(400).json({
                    success: false,
                    message: 'You can not request for a ride you offered'
                });
            }else{
                const text = 'INSERT INTO rideRequests (userId, rideId, created_at) VALUES ($1, $2, Now()) RETURNING *';
                const values = [
                    req.decoded.userId,
                    parseInt(req.params.rideId, 10)
                ];
                client.query(text, values, (err, data) => {
                    if(err){
                        res.status(500).json({
                            success: false,
                            message: 'could not establish database connection.'
                        });
                    }else{
                        res.status(201).json({
                            success: true,
                            message: 'Ride Request has been posted.',
                            request: data.rows[0]
                        });
                    }
                });
            }
        });

    }
    static putRideRequest (req, res){
        const text = 'SELECT * FROM rideRequests WHERE id = $1 and created_at = updated_at';
        const values = [
            parseInt(req.params.requestId, 10),
        ];
        client.query(text, values, (err, data)=>{
            if(data.rowCount === 0){
                return res.status(403).json({
                    success: false,
                    message:  'Ride does not exist or has already been responded to.'
                });
            }else{
                const text = 'UPDATE riderequests SET status = $1 , updated_at = Now() WHERE ID = $2';
                const values = [
                    req.body.status, 
                    req.params.requestId
                ];
                client.query(text, values, (err, data) => {
                    if(data){
                        if(req.body.status === 'accept'){
                            return res.status(200).json({
                                success: true,
                                message: 'rides has been accepted.'
                            });
                        }else{
                            return res.status(200).json({
                                success: true,
                                message: 'rides have be rejected'
                            });
                        }
                    }else{
                        return res.status(500).json(err.message);
                    }
                });
            }
            
        });
    }
}

export default RideRequestController;