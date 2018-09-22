import React from 'react'
import PropTypes from 'prop-types';
import RideCard from '../rides/RideCard.jsx';
import '../../css/AllRides.css';



const RidesList = ( {rides} ) => {

    const emptyMessage = (
        <p> There are no rides yet in your collection. </p>
    );

    const ridesList = (
       
        <div >
            {rides.map((ride) => {
                
                return (
                    <RideCard ride={ride} key={ride.id} />
                )
            })}

        </div>
    );

    return (
        <div>
            { rides.length === 0 ? emptyMessage : ridesList }
        </div>
    )
}

RidesList.propTypes = {
    rides: PropTypes.array.isRequired
}

export default RidesList;
