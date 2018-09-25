import React from 'react';
import '../../css/SignUpForm.css';
import ViewSingleRide from '../../component/rides/ViewSigleRide.jsx';
import '../../css/ViewRidesModal.css'


class RideModal extends React.Component {
  render(){
    return (
      <div className="modal">
    <span className="close" onClick={(e) => {
            e.preventDefault();
          document.querySelector('.modal').style.display = 'none';
        }}>X</span>,
        <ViewSingleRide ride = {this.props.ride}/>
</div>
    )
  }
}

export default RideModal;
