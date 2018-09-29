import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  { joinRide, addFlashMessage }  from '../../actions/index.js';
import moment from '../../../UI/js/moment.js';
import '../../css/ViewRidesModal.css'


class ViewSingleRide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rideId: this.props.ride.id,
      errors: {},
      done: false,
      isLoading: false
    }
    this.onJoinRide = this.onJoinRide.bind(this);
  };
  onJoinRide(event){
    event.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    return this.props.joinRide(this.state.rideId, this.context.router.history.push('/rides'))
      .then(
        (rideRequest) => {
         this.props.addFlashMessage({
           type: 'success',
           text: rideRequest.data.message
         })
         this.setState({ done: true })
        }
      ).catch(
        (error) => {
          this.props.addFlashMessage({
            type: 'error',
            text: error.response.data.message
          })
          this.setState({ done: true })
        }
      )
  }
  render() {
    return (
          <div className="ride-modal-content">
          <div className="viewridestyle">
          <h1>Ride Details</h1>
              <table>
                <tbody>
                  <tr>
                    <th> Rides</th>
                    <th> Details</th>
                  </tr>
                  <tr>
                    <td> Start destintion </td>
                    <td>{this.props.ride.startpoint}</td>
                  </tr>
                  <tr>
                    <td> Final destination </td>
                    <td>{this.props.ride.stoppoint}</td>
                  </tr>
                  <tr>
                    <td>Destination Time</td>
                    <td>{this.props.ride.departuretime}</td>
                  </tr>
                  <tr>
                    <td>Destination Date</td>
                    <td>{moment(this.props.ride.departuredate).format('MMMM-DD-YY')}</td>
                  </tr>
                </tbody>
              </table>
              <div className="viewridemodalbutton">
                <button disabled={this.state.isLoading} onClick={this.onJoinRide} className="joinridebutton">Join</button>
              </div>
            </div>
          </div>
        )
  }
}


ViewSingleRide.propTypes = {
  joinRide: PropTypes.func.isRequired,
  ride: PropTypes.object.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

ViewSingleRide.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect (null, { joinRide, addFlashMessage })(ViewSingleRide);