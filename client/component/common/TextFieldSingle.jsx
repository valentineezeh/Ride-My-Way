import React from 'react';
import classnames from 'classnames';
import '../../css/SignUpForm.css';

const TextFieldSingle = ({ field, value, label, placeholder, error, type, onChange}) => {
    return (
    <div className={classnames({'errorPTag': error})} >
        <label ><b>{label}</b>
        </label>
        <input 
        type='text' 
        placeholder={placeholder} 
        name={field} 
        value={value}  
        onChange={onChange}
        required />

        {error && <p className="errorPTag">{error}</p>}  
    </div>
    )
}

export default TextFieldSingle;