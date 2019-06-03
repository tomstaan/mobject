import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addObject } from "../../actions/objects";

export class Form extends React.Component {
  state = {
    title: "",
    description: ""
  };

  static propTypes = {
    addObject: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { title, description } = this.state;
    const object = { title, description };
    this.props.addObject(object);
    this.setState({
      title: "",
      description: ""
    });
  };

  render() {
    const { title, description } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Object</h2>
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
  { addObject }
)(Form);
