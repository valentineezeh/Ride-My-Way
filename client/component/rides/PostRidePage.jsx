import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RideForm  from './RideForm.jsx';
import { createRide, addFlashMessage } from '../../actions';

class PostRidePage extends Component {
  render() {
    const { createRide, addFlashMessage } = this.props;
    return (
      <div>
        <RideForm  createRide={createRide}  addFlashMessage={addFlashMessage} />
      </div>
    )
  }
}

PostRidePage.propsTypes = {
  createRide: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

export default connect(null, { createRide, addFlashMessage })(PostRidePage);
