import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import UserRideList from './UserRideList.jsx'
import { fetchUserRides } from '../../actions/FetchUserRidesAction.js';

class UserRidePage extends Component {

    componentDidMount(){
        this.props.fetchUserRides();
    }

  render() {
    return (
      <div className="viewtop">
          <UserRideList userRides={this.props.userRides} />
      </div>

    )
  }
}

UserRidePage.propsTypes = {
    userRides: PropTypes.array.isRequired,
    fetchUserRides: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return{
        userRides: state.userRides
    }
}

export default connect(mapStateToProps, { fetchUserRides })(UserRidePage);
