import React from 'react';
import Modal from '../modal/SignUpModal.jsx';
import '../../css/HomePage.css'

class HomePage extends React.Component {
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
      <div className="hero-image">
      <div className="hero-text">
        <h1>Welcome To Ride-My-Way</h1>
        <p>The Smart Way To Ride And Communicate With The Amazing People In Nigeria...</p>
        <h2>Join the Community!</h2>
        <button onClick={this.modalToggle}> Get Started. </button>
      </div>
      <div>
      {this.state.modalOpen ? <Modal /> : null} 
      </div>
    </div>
          )
          
  }
  
}

export default HomePage;
