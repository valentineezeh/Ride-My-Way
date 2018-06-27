import client from '../db';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret = process.env.SECRET_KEY;

class SignInController{
    static signInUser (req, res, next){
        const text = "SELECT * FROM users WHERE email = $1";
        const values = [req.body.email]
        // console.log("meme")
       client.query(text, values)
       .then(user => {
        if(!user){
            return res.status(404).json({
                success: false,
                message: 'Authentication failed. User not found.'
            })
        }else if (user){
            if (user.password !== req.body.password){
                res.status(400).json({
                    success: false,
                    message: 'Authentication failed, Wrong Password.'
                })
            }else{
                const token = jwt.sign({
                    email: user.email,
                    userId: user.id,
                }, secret, {expiresIn: 1440});
                return res.status(200).json({
                   success: true,
                   message: `Welcome ${user.firstname} ${user.lastname} to Ride-My-Way`,
                   token 
                })
                }
            }
            }
       ).catch(err => {
           return next(err);
       })
    }
}

module.exports = SignInController;