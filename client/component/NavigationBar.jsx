import React from 'react';
import { Link } from 'react-router-dom';
import myFunction from '../../UI/js/main.js'
import  LoginModal  from './modal/LoginModal.jsx';
import '../css/NavigationBar.css';



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
    return (
      <div className="topnav" id="myTopnav">
        <Link to="/" className="active test">Home</Link>
        <Link className="lefttopnav" id="myTopnav" to="#" onClick={this.modalToggle} >Login</Link>
        {this.state.modalOpen ? <LoginModal onClose={() => this.modalToggle} /> : null}
        <Link to="" className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </Link>
      </div>
          )
  }
}

export default NavigationBar;
