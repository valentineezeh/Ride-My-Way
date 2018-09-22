import React from 'react';
import '../../css/SignUpForm.css';

const AlertNotification = (props) => {
   return (
    <div className="alert">
         <span className="alertclosebtn" onClick={(e) => {
        e.preventDefault();
        document.querySelector('.alert').style.display = 'none'
}}>&times;</span>{props.errors}
    </div>

   )
}

export default AlertNotification;