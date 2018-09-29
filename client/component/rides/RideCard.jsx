import React from 'react';
import PropTypes from 'prop-types';
import moment from '../../../UI/js/moment.js';
import RideModal from '../modal/RideModal.jsx';


class RidesCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          modalOpen: false
        }
        this.modalToggle = this.modalToggle.bind(this);
      }

      modalToggle(){
        this.setState({modalOpen : !this.state.modalOpen});
      }

    render(){
        return (

            <div className="viewcolumn">
              <div className="viewcard" >
               <div className="viewcontainer">
                  <h2>Rides</h2>
                  <p className="viewtitle">
                  From: Destination Start Point
                  </p>
                  <p>{this.props.ride.startpoint}</p>
                  <p className="viewtitle"> To: Destination Stop Point
                  </p>
                  <p>{this.props.ride.stoppoint}</p>
                  <p className="viewtitle">Departure Time: {this.props.ride.departuretime}</p>
                  <p className="viewtitle">Departure Date: {moment(this.props.ride.departuredate).format('MMMM-DD-YY')}</p>
                  <div className="view">
                  <button onClick={this.modalToggle} className="viewbutton" > View Details</button>
              </div>
              <div>
              {this.state.modalOpen ? <RideModal ride={this.props.ride} /> : null}
              </div>
               </div>
                  </div>
                  </div>
      
        )
    }
}

RidesCard.propTypes = {
    ride: PropTypes.object.isRequired,
}

export default RidesCard;
