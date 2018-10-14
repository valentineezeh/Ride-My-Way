import React from 'react';


const SubmitButton = props => (
    <button className="signupbtn" onClick={props.onClick}>{props.label}</button>
);

export default SubmitButton;