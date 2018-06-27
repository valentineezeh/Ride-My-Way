import db from '../db';

class SignUp{
    static createUser (req, res, next) {
        db.none(
            'insert into users(firstname, lastname, sex, email, password, confirmPassword)' + 
            'values(${firstname}, ${lastname}, ${sex}, ${email}, ${password}, ${confirmPassword})', req.body
        )
        .then(()=>{
            res.status(201).json({
                status: 'Success!!',
                message: 'New User successfully created.'
            })
        })
        .catch(err => {
            return next(err);
        })
    }
}


module.exports = SignUp;
