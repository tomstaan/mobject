import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTask } from "../../actions/tasks";
import "./../style/Task.module.css";
//Icons
import closeButton from "./../style/images/delete.png";

export class Form extends React.Component {
  state = {
    title: "",
    description: "",
    priority: "",
    deadline: ""
  };

  static propTypes = {
    addTask: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

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
    const { title, description, priority, deadline } = this.state;
    return (
      <div className="add-form-back">
        <h3 className="tasks-form-heading">New Task</h3>
        <button type="button" className="close-task-button">
          <img src={closeButton} />
        </button>
        <div className="add-form-front">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="title"
                onChange={this.onChange}
                value={title}
                placeholder="Title"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="description"
                onChange={this.onChange}
                value={description}
                placeholder="Description"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="deadline"
                type="date"
                onChange={this.onChange}
                value={deadline}
              />
            </div>
            <div className="form-group">
              <label>Priority</label>
              <input
                className="form-control"
                name="priority"
                type="number"
                onChange={this.onChange}
                value={priority}
                min="1"
                max="5"
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addTask }
)(Form);
