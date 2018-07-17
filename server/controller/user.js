import client from '../db';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

dotenv.config();

const secret = process.env.SECRET;
class UserController{
    static signUp (req, res, next) {
        const email = req.body.email ? req.body.email.split(' ').join('') : '';
        const text = 'SELECT * FROM users WHERE email = $1';
        const values = [
            email
        ];
        client.query(text, values, (err, data) => {
            if (data.rowCount === 1){
                return res.status(409).json({
                    success: false,
                    message: 'This Email has already been used by another user.'
                });
            }else{
                const query = 'INSERT INTO users(firstname, lastname, about, email, password, created_at) VALUES($1, $2, $3, $4, $5, Now() ) RETURNING *';
                const values =[
                    req.body.firstname, 
                    req.body.lastname, 
                    req.body.about, 
                    email, 
                    bcrypt.hashSync(req.body.password, 10)
                ];
                client.query(query, values, (err, data) => {
                    if (err) {
                        return res.status(500).send({
                            success: false,
                            message: 'could not connect to the database'
                        });
                    }
                    else{
                
                        const token = jwt.sign({
                            userId: data.rows[0].id
                        }, secret, {expiresIn: 1440});
                        res.status(201).json({
                            message: 'User registration successful',
                            data: data.rows[0],
                            token
                        });
                  
                    }
                });
            }
        });
        
    }

    static signInUser (req, res, next){
        let email = req.body.email.split(' ').join('');
        const text = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        client.query(text, values, (err, data) => {
            if(data){
                if(data.rowCount === 0){
                    return res.status(404).json({
                        success: false,
                        message: 'Invalid Credentials! Email Not Found.'
                    });
                }
                if(bcrypt.compareSync(req.body.password, data.rows[0].password)){
                    const token = jwt.sign({
                        userId: data.rows[0].id,
                    }, secret, {expiresIn: 1440});
                    return res.status(200).json({
                        success: true,
                        message: 'Welcome User You are now Logged In',
                        data: token
                    });
                }else{
                    return res.status(401).json({
                        success: false,
                        message: 'Incorrect Password'
                    });
                }
            }else{
                return res.status(500).json({
                    success: false,
                    message: 'could not connect to the database'
                });
            }
        });
       
    }
}

export default UserController;