import React from 'react';
import PropTypes from 'prop-types';
import moment from '../../../UI/js/moment.js';
import '../../css/ViewRidesModal.css'

const ViewSingleRide = ({ride}) => {
  console.log(ride)
  return (
    <div className="modal">
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
              <td>{ride.startpoint}</td>
            </tr>
            <tr>
              <td> Final destination </td>
              <td>{ride.stoppoint}</td>
            </tr>
            <tr>
              <td>Destination Time</td>
              <td>{ride.departuretime}</td>
            </tr>
            <tr>
              <td>Destination Date</td>
              <td>{moment(ride.departuredate).format('MMMM-DD-YY')}</td>
            </tr>
          </tbody>
        </table>
        <div className="viewridemodalbutton">
          <button className="joinridebutton">Join</button>
        </div>
      </div>
    </div>
    </div>
  )
}

ViewSingleRide.propTypes = {
  ride: PropTypes.object.isRequired,
}

export default ViewSingleRide;