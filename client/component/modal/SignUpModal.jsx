import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignUpForm from '../signUp/SignUpForm.jsx';
import { userSignUpRequest, addFlashMessage } from '../../actions/index.js'
import '../../css/SignUpForm.css';


class Modal extends React.Component {
  render() {
      const { userSignUpRequest, addFlashMessage } = this.props;
    return (
  <div className="modal">
    <span className="close" onClick={(e) => {
            e.preventDefault();
          document.querySelector('.modal').style.display = 'none';
        }}>X</span>,
        <SignUpForm userSignUpRequest={userSignUpRequest} addFlashMessage={ addFlashMessage } />
</div>
    )
  }
}

Modal.propTypes = {
  userSignUpRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

export default connect(null, { userSignUpRequest, addFlashMessage }) (Modal);
