import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import '../../css/FlashMessage.css';

export default class FlashMessage extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.deleteFlashMessage(this.props.message.id);
    }

  render() {
      const { id, type, text } = this.props.message;
    return (
    <div className={classnames("flashAlert", {
        'flashAlert-success': type === 'success',
        'flashAlert-danger': type === 'error'
    })}>
        <span className="successClosebtn" onClick={this.onClick}>&times;</span> 
        <strong>{text}</strong>
    </div>
    )
  }
}

FlashMessage.propTypes = {
    message: PropTypes.object.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}