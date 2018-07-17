import validator from 'validator';

class SignUpValidation{
    static signUp(req, res, next){
        const email = req.body.email ? req.body.email.split(' ').join('') : '';
        const errors = {
            firstname: [],
            lastname: [],
            email: [],
            password: [],
            about: [],
        };

        if(!email){
            errors.email.push('Email is required');
        }
        if (email && !validator.isEmail(email.toString())){
            errors.email.push('Invalid Email');
        }

        if (req.body.firstname && !validator.isAlpha(req.body.firstname.toString())){
            errors.firstname.push('First name must be alphabetic');
        }
        if (!req.body.firstname) {
            errors.firstname.push('First name must not be empty');
        }
        if (req.body.firstname && req.body.firstname.length <= 2) {
            errors.firstname.push('Length of the first name should be greater than 2 character..');
        }

        if (req.body.lastname && !validator.isAlpha(req.body.lastname.toString())) {
            errors.lastname.push('Last name must be alphabetic');
        }
        if (!req.body.lastname) {
            errors.lastname.push('Last name must not be empty');
        }
        if (req.body.lastname && req.body.lastname.length <= 2) {
            errors.lastname.push('Length of the last name should be greater than 2 character..');
        }

        if (!req.body.password) {
            errors.password.push('Password should not be empty');
        }
        if (req.body.password && req.body.password.length <= 6) {
            errors.password.push('Password must be 6 or more characters..');
        }

        if (!req.body.about) {
            errors.about.push('About should not be empty');
        }
        if (req.body.about && req.body.about.length < 6) {
            errors.about.push('About must be more than 6 characters..');
        }

        if (req.body.password !== req.body.confirmPassword){
            errors.password.push('Mismatch Password');
        }
				
        if(errors.firstname.length > 0 ||
					errors.lastname.length > 0 ||
					errors.email.length > 0 ||
					errors.password.length > 0 ||
					errors.about.length > 0) {
            return res.status(400).json({
                errors
            });
        }
     
        return next();
    }
}
export default SignUpValidation;