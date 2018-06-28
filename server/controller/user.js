import client from '../db';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret = process.env.SECRET_KEY;
class UserController{
    static signUp (req, res, next) {
        const query = 'INSERT INTO users(firstname, lastname, sex, email, password, confirmpassword) VALUES($1, $2, $3, $4, $5, $6) RETURNING *';
        const values =[
            req.body.firstname, req.body.lastname, 
            req.body.sex, 
            req.body.email, req.body.password, 
            req.body.confirmPassword
        ]
        client.query(query, values, (err, data) => {
            if (err) return next(err);
            res.status(201).json({
                data: data.rows[0]
            })
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
                       const token = jwt.sign({
                           email: data.email,
                           userId: data.id,
                       }, secret, {expiresIn: 1440});
                       return res.status(200).json({
                           success: true,
                           message: "Welcome User You are now Logged In",
                           token
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