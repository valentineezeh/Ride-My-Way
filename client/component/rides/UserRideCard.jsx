import React from 'react';
import PropTypes from 'prop-types';
import moment from '../../../UI/js/moment.js'

const UserRideCard = ( userRide  ) => {

  return (
    <div className="viewcolumn">
        <div className="viewcard" >
         <div className="viewcontainer">
            <h2>My Rides</h2>
            <p className="viewtitle">
            From: Destination Start Point
            </p>
            <p>{userRide.ride.startpoint}</p>
            <p className="viewtitle"> To: Destination Stop Point
            </p>
            <p>{userRide.ride.stoppoint}</p>
            <p className="viewtitle">Departure Time: {userRide.ride.departuretime}</p>
            <p className="viewtitle">Departure Date: {moment(userRide.ride.departuredate).format('MMMM-DD-YY')}</p>
            <div className="view">
            <button className="viewbutton" > View Details</button>
            </div>
        </div>
      </div>
      </div>
  )
}

UserRideCard.propTypes = {
  userRide: PropTypes.array.isRequired,
}

export default UserRideCard;

