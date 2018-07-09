import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secret = process.env.SECRET;

const Auth = {
    // function to authenticate to users with token
    verify: (req, res, next) => {
        const token = req.headers.authorization;
        if(token){
            jwt.verify(token, secret, (err, decoded) =>{
                if(err){
                    return res.status(401).send({
                        message: 'You do not have permission to this page.'
                    });
                }else{
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });
        }else{
            return res.status(401).send({ message: 'You need to signup or login to perform this action' })
        }
    }
}
export default Auth;