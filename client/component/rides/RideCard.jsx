import React from 'react';
import PropTypes from 'prop-types';
import moment from '../../../UI/js/moment.js'


const RidesCard = ( {ride} ) => {

  return (

      <div className="viewcolumn">
        <div className="viewcard" >
         <div className="viewcontainer">
            <h2>Rides</h2>
            <p className="viewtitle">
            From: Destination Start Point
            </p>
            <p>{ride.startpoint}</p>
            <p className="viewtitle"> To: Destination Stop Point
            </p>
            <p>{ride.stoppoint}</p>
            <p className="viewtitle">Departure Time: {ride.departuretime}</p>
            <p className="viewtitle">Departure Date: {moment(ride.departuredate).format('MMMM-DD-YY')}</p>
            <div className="view">
            <button className="viewbutton" > View Details</button>
        </div>
         </div>
            </div>
            </div>

  )
}

RidesCard.propTypes = {
    ride: PropTypes.object.isRequired,
}

export default RidesCard;
