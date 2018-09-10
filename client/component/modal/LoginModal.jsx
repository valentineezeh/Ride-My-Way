import React, { Component } from 'react'
import LoginForm from '../login/LoginForm.jsx';


export class LoginModal extends Component {
  render() {
    return (
      <div className="modal">
        <span className="close" onClick={(e) => {
            e.preventDefault();
            document.querySelector('.modal').style.display = 'none';
        }}>X</span>
        <LoginForm/>
        
      </div>
    )
  }
}

export default LoginModal;
