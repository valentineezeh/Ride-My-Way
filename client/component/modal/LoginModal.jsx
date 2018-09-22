import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import LoginForm from '../login/LoginForm.jsx';
import { userLoginRequest, addFlashMessage } from '../../actions/index.js'

export class LoginModal extends Component {
  render() {
    const { userLoginRequest, addFlashMessage } = this.props;
    return (
      <div className="modal">
        <span className="close" onClick={(e) => {
            e.preventDefault();
            document.querySelector('.modal').style.display = 'none';
        }}>X</span>
        <LoginForm userLoginRequest={userLoginRequest} addFlashMessage={ addFlashMessage } />
        
      </div>
    )
  }
}

LoginModal.propsTypes = {
  userLoginRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

export default connect (null, { userLoginRequest, addFlashMessage }) (LoginModal);
