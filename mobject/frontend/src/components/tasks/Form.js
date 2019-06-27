import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTask } from "../../actions/tasks";
import "./../style/Task.module.css";
import styled from "styled-components";
import closeButton from "./../style/images/delete.png";

const Styles = styled.div``;

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
            <div className="form-label-group">
              <input
                className="form-control"
                type="text"
                placeholder="Title"
                name="title"
                id="label-title"
                onChange={this.onChange}
                value={title}
              />
              <label className="placeholder-title" htmlFor="label-title">
                Title
              </label>
            </div>
            <div className="form-label-group">
              <textarea
                className="form-control"
                name="description"
                onChange={this.onChange}
                value={description}
                placeholder="Description"
                id="label-description"
              />
              <label className="placeholder-text" htmlFor="label-description">
                Description
              </label>
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
            <Styles>
              <div className="form-group">
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
            </Styles>

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
