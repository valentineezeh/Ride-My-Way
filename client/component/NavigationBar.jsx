import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import myFunction from '../../UI/js/main.js'
import  LoginModal  from './modal/LoginModal.jsx';
import '../css/NavigationBar.css';
import { addFlashMessage } from '../actions/index.js';




class NavigationBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false
    }
    this.modalToggle = this.modalToggle.bind(this);
  }

  modalToggle(){
    this.setState({modalOpen: !this.state.modalOpen});
  }

  render(){

    const { isAuthenticated } = this.props.auth;
    const { addFlashMessage } = this.props
    const userLinks = (
      <div>
        <Link to="/home" className="active">Home</Link>
        <Link to="/rides" className="allRidesActive">All Rides</Link>
        <Link to="/user/rides" >My Rides</Link>
        <Link to="/user/ride" >Offer Rides</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link to="" className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </Link>
      </div>


    );

    const guestLinks = (

      <div>
        <Link to="/" className="active test">Home</Link>
        <Link className="lefttopnav" id="myTopnav" to="#" onClick={this.modalToggle} >Login</Link>
        {this.state.modalOpen ? <LoginModal onClose={() => this.modalToggle} /> : null}
        <Link to="" className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </Link>
      </div>

    );

    return (
      <div className="topnav" id="myTopnav">

        { isAuthenticated ? userLinks : guestLinks  }
      </div>
          )
  }
}

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

NavigationBar.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { addFlashMessage })(NavigationBar);
