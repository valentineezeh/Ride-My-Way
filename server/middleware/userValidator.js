import validator from 'validator';

class SignUpValidation{
    static signUp(req, res, next){
        const errors = [];
        if(req.body.email == undefined){
            errors.push('Email is required');
            return res.status(400).send({
                status: 'Error',
                message: errors
            });
        }
        if(!validator.isEmail(req.body.email.toString())){
            errors.push('Valid Email is required');
            return res.status(400).send({
                status: 'Error',
                message: errors
            })
        }
        if(!validator.isAlpha(req.body.firstname.toString())){
            errors.push('First name must be alphabetic');
            return res.status(400).send({
                status: 'Error',
                message: errors
            })
        }
        if (req.body.firstname === '') {
            errors.push('First name cannot be empty');
            return res.status(400).send({
              status: 'Error',
              message: errors
            });
          }
          if (req.body.firstname.length <= 1) {
            errors.push('Length of the first name should be greater than 1 character..');
            return res.status(400).send({
              status: 'Error',
              message: errors
            });
          }
          if (!validator.isAlpha(req.body.lastname.toString())) {
            errors.push('First name must be alphabetic');
            return res.status(400).send({
              status: 'Error',
              message: errors
            });
          }
          if (req.body.lastname == '') {
            errors.push('Last name cannot be empty');
            return res.status(400).send({
              status: 'Error',
              message: errors
            });
          }
          if (req.body.lastname.length <= 1) {
            errors.push('Length of the last name should be greater than 1 character..');
            return res.status(400).send({
              status: 'Error',
              message: errors
            });
          }
        if (req.body.about === '') {
            errors.push('About text cannot be empty');
            return res.status(400).send({
              status: 'Error',
              message: errors
            });
          }
          if (req.body.about.length <= 6) {
            errors.push('Length of the about should be greater than 1 character..');
            return res.status(400).send({
              status: 'Error',
              message: errors
            });
          }
          if (req.body.password == undefined) {
            errors.push('Valid Password required...');
            return res.status(400).send({
              status: 'Error',
              message: errors
            });
          }
          if (req.body.password == '') {
            errors.push('Password should not be empty');
            return res.status(400).send({
              status: 'Error',
              message: errors
            });
          }
          if (req.body.password.length <= 6) {
            errors.push('Password must exceed 6 characters..');
            return res.status(400).send({
              status: 'Errors',
              message: errors
            });
          }
          if (req.body.password != req.body.confirmPassword){
              errors.push('Mismatch Password');
              return res.status(400).send({
                  status: 'Error',
                  message: errors
              })
          }
          if (errors.length > 0) {
            return res.status(400).send({
              status: 'Error',
              message: errors
            });
          }
          
        return next();
        //console.log(errors)
    }
}
export default SignUpValidation;