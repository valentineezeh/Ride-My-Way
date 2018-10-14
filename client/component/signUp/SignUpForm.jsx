import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Redirect } from 'react-router-dom';
import TextFieldSingle from '../common/TextFieldSingle.jsx';
import AlertNotification from '../common/AlertNotification.jsx';
import SubmitButton from '../common/SubmitButton.jsx';
import CancelButton from '../common/CancelButton.jsx';
import '../../css/SignUpForm.css';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      about: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
      isLoading: false,
      done: false,
    }
  }
  onChange(event){
    event.preventDefault();
    if(!!this.state.errors[event.target.name]){
      let errors = Object.assign({}, this.state.errors);
      delete errors[event.target.name]
      this.setState({[event.target.name]: event.target.value, errors
      })
    }else{
      this.setState({[event.target.name]: event.target.value}); 
    }
    
  }
  onSubmit(event){
    event.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.userSignUpRequest(this.state)
    .then(
      () => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'User registration successful.',
        })
        this.setState({ done: true })
      }   
    ).catch(
      (error) => {
        if( error.response.data.errors ){
          this.setState({ errors: error.response.data.errors, 
            isLoading: false })
          }else{
            this.setState({ errors: error.response.data})
          }
          
        }
    )
    
  }

  render () {
    const { errors, firstname, lastname, about, email, password, confirmPassword } = this.state;
    const form = (
       <div>
      
         <form className="signUp-modal-content" >
         {errors.message && <AlertNotification errors={errors.message}/>}
           <div className="Signupcontainer">
           
           <h1>Sign Up</h1>
             <p>Please fill in this form to create an account.</p>
             
         <div className="newform-name">
             
           <div className={classnames("newform-group", {errors: !!errors.firstname})}>
             <label htmlFor="firstname"><b>First Name</b></label>
             <input 
             className="form-control"  
             type="text" 
             placeholder="Enter First Name" 
             name="firstname" 
             value={firstname} 
             onChange={this.onChange.bind(this)}
             required />
             {errors.firstname && <p className="errorPTag">{errors.firstname[0]}</p>}
           </div>
             
           <div className="newform-group">
             <label htmlFor="lastname"><b>Last Name</b></label>
               <input className="form-control" type='text' placeholder="Enter Last Name" name="lastname" value={lastname}
               onChange={this.onChange.bind(this)}
               />
               {errors.lastname && <p className="errorPTag">{errors.lastname[0]}</p>}
           </div>
             
         </div>   
             <label htmlFor="about"><b>Bio</b></label>
             <textarea type="text" placeholder="Enter Little bio about yourself" name="about" value={about} 
             onChange={this.onChange.bind(this)}
             required>
             </textarea>
             {errors.about && <p className="errorPTag">{errors.about[0]}</p>}
 
             <TextFieldSingle 
               error={errors.email}
               label="Email"
               onChange={this.onChange.bind(this)}
               value={email}
               name="email"
               field="email"
               placeholder="Enter Email"
              />
             
         <div className="newform-name">
           <div className="newform-group">
             <label htmlFor="psw"><b>Password</b></label>
             <input className="form-control"  type="password" placeholder="Enter Password" name="password" 
             value={password} 
             onChange={this.onChange.bind(this)}
             required />
             {errors.password && <p className="errorPTag">{errors.password[0]}</p>}
           </div>
             
           <div className="newform-group">
             <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
               <input className="form-control" type='password' placeholder="Repeat Password" name="confirmPassword" 
               value={confirmPassword}
               onChange={this.onChange.bind(this)}
               />
               {errors.confirmPassword && <p className="errorPTag">{errors.confirmPassword[0]}</p>}
           </div>
         </div>
             <div className="clearfix">
               <CancelButton />
               <SubmitButton onClick={this.onSubmit.bind(this)} type="submit" label='Submit' />
             </div>
           </div>
         </form>
       </div>
    )
    return (
      <div>
        {this.state.done ? <Redirect to="/rides" /> : form}
      </div>
          )
  }
}

SignUpForm.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default SignUpForm;