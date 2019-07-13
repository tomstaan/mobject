import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import "./../style/Task.module.css";
/* Slider */
import closeButton from "./../style/images/delete.png";
import Formfields from "./Formfields";

/* React Date Picker */
//import DayPicker from "react-day-picker";
//import "react-day-picker/lib/style.css";

export class Form extends React.Component {
  
  state = {
    formVisible: state
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSliderChange = e => this.setState({ priority: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { title, description, priority, deadline } = this.state;
    const task = { title, description, priority, deadline };
    this.props.addTask(task);
    this.setState({
      title: "",
      description: "",
      priority: "",
      deadline: ""
    });
  };

  render() {
    const { formVisible } = this.state;
    return (
      <div className="add-form-back">
        <h3 className="tasks-form-heading">New Task</h3>
        <button onClick={this.toggleForm} type="button" className="close-task-button">
          <img src={closeButton} />
        </button>
        <Formfields />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    formVisible: state
  }
}

export default connect(mapStateToProps, { handleNumber })(ComponentOne);