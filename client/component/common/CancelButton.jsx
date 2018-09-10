import React from 'react';


const CancelButton = () => (
    <button type="button" className="cancelbtn" onClick={
        (e) => {
            e.preventDefault();
            document.querySelector('.modal').style.display = 'none';
        }
    }>Cancel</button>
);

export default CancelButton;