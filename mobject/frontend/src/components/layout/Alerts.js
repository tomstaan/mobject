import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.title) {
        alert.error(`Title: ${error.msg.title.join()}`);
      }
      if (error.msg.description) {
        alert.error(`Description: ${error.msg.description.join()}`);
      }
    }

    if (message !== prevProps.message) {
      if (message.deleteObject) {
        alert.success(message.deleteObject);
      }
      //Triggers add object message from object actions
      if (message.addObject) {
        alert.success(message.addObject);
      }
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
