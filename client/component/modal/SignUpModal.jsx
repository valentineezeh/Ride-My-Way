import React from 'react';
import SignUpForm from '../signup/SignUpForm.jsx';
import '../../css/SignUpForm.css';


class Modal extends React.Component {
  render() {
    return (
  <div className="modal">
    <span className="close" onClick={(e) => {
            e.preventDefault();
          document.querySelector('.modal').style.display = 'none';
        }}>X</span>,
        <SignUpForm />
</div>
    )
  }
}

export default Modal;
