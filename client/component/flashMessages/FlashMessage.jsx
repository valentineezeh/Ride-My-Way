import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../css/FlashMessage.css';

export default class FlashMessage extends Component {
  render() {
      const { type, text } = this.props.message;
    return (
    <div className={classnames("flashAlert", {
        'flashAlert-success': type === 'success',
        'flashAlert-danger': type === 'error'
    })}>
        <span className="successClosebtn" onClick={(e) => {
        e.preventDefault();
        document.querySelector('.flashAlert').style.display = 'none'
}}>&times;</span> 
        <strong>{text}</strong>
    </div>
    )
  }
}

FlashMessage.propTypes = {
    message: PropTypes.object.isRequired
}