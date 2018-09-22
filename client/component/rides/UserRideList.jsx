import React from 'react'
import PropTypes from 'prop-types';
import UserRideCard from '../rides/UserRideCard.jsx'

const UserRideList = ( { userRides } ) => {

    const emptyMessage = (
        <div>
          <h1 align="center">You are yet to create a Ride.</h1>
        <h2 align="center"> Kindly go to the Offer Ride Page to create a Ride</h2>
        </div>
    );

    const userRideList = (
        <div>
            {userRides.map((ride) => {

                return (
                    <UserRideCard ride={ride} key={ride.id} />
                )
            })}
        </div>
    )

  return (
    <div>
      { userRides.length === 0 ? emptyMessage: userRideList }
    </div>
  )
}

UserRideList.propTypes = {
    userRides: PropTypes.array.isRequired
}

export default UserRideList;

