import client from '../db';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

dotenv.config();

const secret = process.env.SECRET;
class UserController{
    static signUp (req, res, next) {
        const query = 'INSERT INTO users(firstname, lastname, about, email, password, confirmpassword, created_at) VALUES($1, $2, $3, $4, $5, $6, Now() ) RETURNING *';
        const values =[
            req.body.firstname, 
            req.body.lastname, 
            req.body.about, 
            req.body.email, 
            bcrypt.hashSync(req.body.password, 10),
            bcrypt.hashSync(req.body.confirmPassword, 10)
        ]
        client.query(query, values, (err, data) => {
            if (err) return res.status(409).send({
                    success: false,
                    message: err
            });
            else{
                const token = jwt.sign({
                    id: data.rows.id
                }, secret, {expiresIn: 1440});
                res.status(201).json({
                    message: 'User registration successful',
                    data: data.rows[0],
                    token
                })
            }
        })
        
    }

    static signInUser (req, res, next){
        const text = "SELECT * FROM users WHERE email = $1";
        const values = [req.body.email]
        // console.log("meme")
       client.query(text, values, (err, data) => {
           if(data) {
               if(!data){
                   return res.status(404).json({
                       success: false,
                       message: 'Authentication failed. User not found'
                   })
               }else if(data){
                   //console.log(data.rows.password)
                   let dataPassword = ''
                   let dataEmail = ''
                   let dataUserId = 0;
                   
                   //console.log(data.rows)
                   data.rows.map(user => {
                       //console.log(user)
                       console.log(user.id)
                     dataUserId += user.id;
                      dataEmail += user.email;
                      //console.log(datauserIdNum)

                   })
                   
                   //console.log(dataUserId)
                   data.rows.map((user) => {
                       if (req.body.password == user.password){
                           dataPassword += user.password
                       }
                   });
                   if(dataPassword !== req.body.password){
                       //console.log(dataPassword)
                       res.status(400).json({
                           success: false,
                           message: 'Authentication failed, wrong Password'
                       });
                   }else{
                       bcrypt.compare(req.body.password, dataPassword, (err, response) => {
                           if(err){
                               return res.status(500).json({
                                   error: err.message
                               })
                           }else{
                            const token = jwt.sign({
                                email: dataEmail,
                                userId: dataUserId,
                            }, secret, {expiresIn: 1440});
                            return res.status(200).json({
                                success: true,
                                message: "Welcome User You are now Logged In",
                                token
                            })
                           }
                       })
                       
                   }
               }
           }else{
               return next(err)
           }
       })
       
    }
}


module.exports = UserController;