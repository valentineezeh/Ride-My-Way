import validator from 'validator';

class SignInValidation{
    static signIn(req, res, next){
        const email = req.body.email ? req.body.email.split(' ').join('') : '';
        const errors = {
            email: [],
            password: []
        };
        if (email == ''){
            errors.email.push('Email should not be empty');
        }
        if (email && !validator.isEmail(email)){
            errors.email.push('Email must be valid..');
        }
        if (!email){
            errors.email.push('Email is required..');
        }
        if ( !req.body.password ){
            errors.password.push('Password is required...');
            
        }
        if ( req.body.password == ''){
            errors.password.push('Password should not be empty.');
        }
        if(errors.email.length > 0 || errors.password.length > 0){
            return res.status(400).json({
                errors
            });
        }
        return next();
    }
}
export default SignInValidation;