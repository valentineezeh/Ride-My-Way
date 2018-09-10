import validator from 'validator';
import isEmpty from 'is-empty';


export default function validateInput(data){
    let errors = {};
    if(!validator.isEmail(data.email)){
        errors.email = 'Invalid Email';
    }
    if(data.email == ''){
        errors.email = 'This field is required';
    }
    if(data.password == ''){
        errors.password = 'Password field is required';
    }
    if (!data.email || data.email.trim().length === 0) {
        errors.email = 'This field can not be blank';
    }
    if(!data.password){
        errors.password = 'Password Field should not be blank';
    }
    return{
        errors,
        isValid: isEmpty(errors)
    };
}
