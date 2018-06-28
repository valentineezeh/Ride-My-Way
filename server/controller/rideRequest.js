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
}

export default RideRequestController;