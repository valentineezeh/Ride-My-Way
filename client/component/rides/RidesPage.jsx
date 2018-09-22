import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RideList from './RideList.jsx';
import { fetchRides } from '../../actions/FetchRidesAction.js';



class RidesPage extends React.Component {

    componentDidMount(){
        this.props.fetchRides();
    }

    render(){
        return (
            <div className="viewtop">
                <RideList rides={this.props.rides} />

            </div>
        )
    }
}

RidesPage.propTypes = {
    rides: PropTypes.array.isRequired,
    fetchRides: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        rides: state.rides
    }
}

export default connect(mapStateToProps, { fetchRides }) (RidesPage);
