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
    static getARide(req, res, next){
        client.query('SELECT * FROM rides WHERE id = $1', [req.params.rideId], (err, data)=>{
            if (data){
                console.log(data.rows)
                let newRide = [];
                // let newRideNum = parseInt(newRide, 10);
                // console.log(newRideNum)
                data.rows.map((ride) => {
                    console.log(ride.id)
                    if(ride.id === parseInt(req.params.rideId, 10)){
                        newRide.push(ride)
            }
            });
            if (newRide.length == 0){
                return res.status(404).json({
                    message: "Ride Record does not exist"
                });
            }else{
                return res.status(200).json({
                    ride: newRide
                })
            }
    }else{
                return next(err);
            }
        })
    }

    static postRide (req, res, next) {
        const text = "INSERT INTO rides(destinationstartpoint, destinationstoppoint, departuretime) VALUES ($1, $2, $3) RETURNING *";
        const values = [
            req.body.destinationstartpoint,
            req.body.destinationstoppoint,
            req.body.departuretime,
        ]
        console.log(req.decoded.id)
        client.query(text, values, (err, data) => {
           if(err) return next(err)
           //console.log(data)
           res.status(201).json({
                   success: "true",
                   message: "Ride has been created..",
                   data: data.rows[0]
               })
           
        })
    }
    
}
export default RidesController;