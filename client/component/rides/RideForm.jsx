import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import TextFieldSingle from '../common/TextFieldSingle.jsx';
import '../../css/RideForm.css';
import { createRide } from '../../actions/CreateRideAction.js';
import SubmitButton from '../common/SubmitButton.jsx';
import AlertNotification from '../common/AlertNotification.jsx';
import rideValidator from '../../middleware/rideFormValid.js';

class RideForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          startPoint: '',
          stopPoint: '',
          departureTime: '',
          departureDate: '',
          errors: {},
          isLoading: false,
          done: false,
      }
      this.onSubmit = this.onSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
  };

  onChange(event) {
    event.preventDefault();
    if(!!this.state.errors[event.target.name]){
        let errors = Object.assign({}, this.state.errors);
        delete errors[event.target.name]
        this.setState({[event.target.name]: event.target.value, errors
        })
      }else{
        this.setState({[event.target.name]: event.target.value});
      }
}

isValid(){
  const { errors, isValid } = rideValidator(this.state);
  if(!isValid){
    this.setState({ errors })
  }
  return isValid;
}

onSubmit(event) {
    event.preventDefault();
    if(this.isValid()){
      this.setState({ errors: {}, isLoading: true });
      this.props.createRide(this.state, this.context.router.history.push('/user/rides')).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'Ride has been created successfully...'
          })
          this.setState({ done: true })
        }
      ).catch(
        (error) => {
          this.setState({ errors: error.response.data, isLoading: false}, this.context.router.history.push('/'))
        }
      )
    }


}

  render() {
    const { errors, startPoint, stopPoint, departureTime, departureDate, isLoading } = this.state;
    const form = (

        <div className="rideformcontainer">
        <form id="ridecontact" >
        {errors.message && <AlertNotification errors={errors.message}/>}
          <h3>Offer Ride</h3>
          <h4>Fill in the form details to offer a ride.</h4>
          <fieldset>
          <TextFieldSingle
            error={errors.startPoint}
            label=""
            onChange={this.onChange}
            value={startPoint}
            name="startPoint"
            field="startPoint"
            placeholder="Destination Starting Point"
            tabIndex="2"
        />
          </fieldset>
          <fieldset>
          <TextFieldSingle
            error={errors.stopPoint}
            label=""
            onChange={this.onChange}
            value={stopPoint}
            name="stopPoint"
            field="stopPoint"
            placeholder="Destination Stop Point"
            tabIndex="3"
        />
          </fieldset>
          <fieldset>
          <TextFieldSingle
            error={errors.departureTime}
            label="Departure Time"
            onChange={this.onChange}
            value={departureTime}
            name="departureTime"
            field="departureTime"
            type="time"
            placeholder="Departure Time"
            tabindex="4"
        />
          </fieldset>
          <fieldset>
          <TextFieldSingle
            error={errors.departureDate}
            label="Departure Date"
            onChange={this.onChange}
            value={departureDate}
            name="departureDate"
            field="departureDate"
            type="date"
            placeholder="Departure Date"
            tabindex="5"
        />
        </fieldset>
          <fieldset>
            <SubmitButton disabled={isLoading} id="contact-submit"  onClick={this.onSubmit} type="submit" label='Create Ride' />
          </fieldset>
        </form>
        </div>
    )
    return (
      <div>
        {this.state.done ? <Redirect to="/rides"/> : form}
      </div>
    )
  }
}

RideForm.propTypes = {
    createRide: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

RideForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, { createRide })(RideForm);

