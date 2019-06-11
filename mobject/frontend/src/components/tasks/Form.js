import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTask } from "../../actions/tasks";

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
    const { title, description, priority, date } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Task</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
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
            <label>deadline</label>
            <input
              className="form-control"
              name="deadline"
              type="deadline"
              onChange={this.onChange}
              value={deadline}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addTask }
)(Form);
