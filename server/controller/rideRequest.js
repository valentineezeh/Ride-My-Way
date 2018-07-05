import client from '../db/index';

class RideRequestController{
    static getAllRideRequest(req, res, next){
        client.query("SELECT * FROM riderequests WHERE  rideId =$1", [ req.params.rideId ], (err, data) => {
            if (data){
                let rideRequest = [];
                //console.log(data.rows)
                data.rows.map((request) => {
                    //console.log(request);
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
                        message: 'All ride request have be fetch.',
                        rideRequest
                    })
                }
            }else{
                return next(err)
            }
        })
    }
    static postRideRequest (req, res, next) {
        const text = "INSERT INTO rideRequests (accept, reject, userId, rideId, created_at) VALUES ($1, $2, $3, $4, Now()) RETURNING *";
        const values = [
            req.body.accept,
            req.body.reject,
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
                        message:  "Ride does not exist"
                    })
                }else{
                    const text = "UPDATE riderequests SET accept = $1, reject = $2, updated_at = Now() WHERE ID = $3"
                    const values = [
                        req.body.accept,
                        req.body.reject,
                        req.params.requestId
                    ]
                    //console.log(req.body.accept, req.body.reject, req.params.id)
                    client.query(text, values, (err, data) => {
                        //console.log(data.rows)
                        if(data){
                            //console.log(req.body.accept)
                            if(req.body.accept === 'true'){
                            //console.log('================================')
                            return res.status(200).json({
                                    success: true,
                                    message: 'rides has been accepted.'
                                })
                            }else{
                                return res.status(200).json({
                                    success: true,
                                    message: 'rides have be rejected'
                                })
                            }
                        }else{
                            //console.log(data)
                            return res.status(500).json(err.message)
                        }
                    })
                }
            }
        })
    }
}

export default RideRequestController;