import client from '../db/index';

class RideRequestController{
    static getAllRideRequest(req, res, next){
        client.query("SELECT * FROM riderequests WHERE  rideId =$1", [ req.params.rideId ], (err, data) => {
            if (data){
                let rideRequest = [];
                //console.log(data.rows)
                data.rows.map((request) => {
                    console.log(request);
                    if(request.id == parseInt(req.params.rideId, 10)){
                        //console.log(request.rideId);
                        rideRequest.push(request)
                    }
                });
                if (rideRequest.length == 0){
                    return res.status(404).json({
                        message: "Ride Request not found"
                    })
                }else{
                    return res.status(200).json({
                        rideRequest
                    })
                }
            }else{
                return next(err)
            }
        })
    }
    static postRideRequest (req, res, next) {
        const text = "INSERT INTO rideRequests (userId, rideId, created_at) VALUES ($1, $2, Now()) RETURNING *";
        const values = [
            req.decoded.userId,
            req.params.rideId
        ]
        client.query(text, values, (err, data) =>{
            if(err){
                return res.status(400).json({
                    success: false,
                    message: 'Bad request! Ride does not exist.'
                })
            };
            res.status(201).json({
                success: 'true',
                message: "Ride Request has been posted.",
                data: data.rows[0]
            })
        })
    }
    // UPDATE rideRequests SET RIDEREQUEST = $1, UPDATED_AT = $2 VALUES ($1, Now()) WHERE ID= $3 AND ID= $4"
    static putRideRequest (req, res, next){
        const text = "SELECT * FROM rideRequests WHERE userId = $1 AND rideId = $2";
        const values = [
            req.decoded.userId,
            req.params.rideId
        ]
        client.query(text, values, (err, data)=>{
            if(data){
                if(!data){
                    return res.status(404).json({
                        error: { form: "Ride does not exist"}
                    })
                }
            }
        })
    }
}

export default RideRequestController;