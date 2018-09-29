import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AlertNotification from '../common/AlertNotification.jsx';
import CancelButton from '../common/CancelButton.jsx';
import SubmitButton from '../common/SubmitButton.jsx';
import TextFieldSingle from '../common/TextFieldSingle.jsx';
import userLoginRequest from '../../actions/index.js';
import validateInput from '../../middleware/LoginValidate.js';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            isLoading: false,
            done: false,
        }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    };

    onChange(event) {
        if(!!this.state.errors[event.target.name]){
            let errors = Object.assign({}, this.state.errors);
            delete errors[event.target.name]
            this.setState({[event.target.name]: event.target.value, errors
            })
          }else{
            this.setState({[event.target.name]: event.target.value});
          }
    }

    isValid(){
        const { errors, isValid } = validateInput(this.state);
        if(!isValid){
            this.setState({ errors })

        }
        return isValid;
    }

    onSubmit(event){
        event.preventDefault();
        if(this.isValid()){
        this.setState({errors: {}, isLoading: true });
        this.props.userLoginRequest(this.state, this.context.router.history.push('/home')).then(
            () => {
                this.props.addFlashMessage({
                    type: 'success',
                    text: `Welcome ${this.state.email}, You are now Logged In`
                }),
                this.setState({ done: true })
            },
        ).catch(
            (error) => {
                this.setState({ errors: error.response.data,
                    isLoading: false}, this.context.router.history.push('/'))
                    console.log('Login form==>', this.state)
            }
        )
        }

    }

    render () {
        const { errors, email, password, isLoading } = this.state;
        const form = (
    <form className="login-modal-content animate">
      <div className="container">
      {errors.message && <AlertNotification errors={errors.message}/>}
        <h1>Login</h1>
        <TextFieldSingle
        error={errors.email}
        label="Email"
        onChange={this.onChange}
        value={email}
        name="email"
        field="email"
        placeholder="Enter Email"
        />

        <TextFieldSingle
        error={errors.password}
        label="Password"
        onChange={this.onChange}
        value={password}
        name="password"
        field="password"
        type="password"
        placeholder="Enter Password"
        />

        <div >

            <SubmitButton disabled={isLoading} className="loginbtn" onClick={this.onSubmit} type="submit" label='Login' />
            <CancelButton className="logincancelbtn" />

        </div>
      </div>
    </form>
        )
        return (
            <div>
                {this.state.done ? <Redirect to="/home" /> : form}
            </div>
        )
    }
}

LoginForm.propTypes = {
    userLoginRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default connect (null, { userLoginRequest })(LoginForm);
