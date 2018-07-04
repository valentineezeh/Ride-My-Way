import validator from 'validator';

class SignUpValidation{
    static signUp(req, res, next){
        //console.log('SIGNUPVALIDATION RAN')
        if(req.body.email == undefined){
            return res.status(400).send({
                message: 'Email is required'
            });
        }
        if(!validator.isEmail(req.body.email.toString())){
            return res.status(400).send({
                message: 'Valid Email is required'
            })
        }
        if(!validator.isAlpha(req.body.firstname.toString())){
            return res.status(400).send({
                message: "First name must be alphabetic"
            })
        }
        if (req.body.firstname === '') {
            return res.status(400).send({
              message: 'First name must be alphabetic'
            });
          }
          if (req.body.firstname.length <= 1) {
            return res.status(400).send({
              message: 'Length of the first name should be greater than 1 character..'
            });
          }
          if (!validator.isAlpha(req.body.lastname.toString())) {
            return res.status(400).send({
              message: 'Last name must be alphabetic'
            });
          }
          if (req.body.lastname == '') {
            return res.status(400).send({
              message: 'Last name must be alphabetic'
            });
          }
          if (req.body.lastname.length <= 1) {
            return res.status(400).send({
              message: 'Length of the last name should be greater than 1 character..'
            });
          }
          //console.log("PASSWORD CHECK", req.body.password)
          if (req.body.password == undefined) {
            return res.status(400).send({
              message: 'Valid Password required...'
            });
          }
          if (req.body.password == '') {
            return res.status(400).send({
              message: 'Password should not be empty'
            });
          }
          if (req.body.password.length <= 6) {
            return res.status(400).send({
              message: 'Password must exceed 6 characters..'
            });
          }
          if (req.body.password != req.body.confirmPassword){
              return res.status(400).send({
                  message: 'Mismatch Password'
              })
          }
          
        return next();
        //console.log(errors)
    }
}
export default SignUpValidation;