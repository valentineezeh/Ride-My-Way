import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlashMessage from './FlashMessage.jsx';

class FlashMessageList extends Component {
  render() {
      const messages = this.props.messages.map(
          message => <FlashMessage key={message.id} message={message} />
      );
    return (
        <div>{messages}</div>
    );
  }
}

FlashMessageList.propTypes = {
    messages: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps)(FlashMessageList);