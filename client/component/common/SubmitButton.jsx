import React from 'react';


const SubmitButton = props => (
    <button onClick={props.onClick}>{props.label}</button>
);

export default SubmitButton;