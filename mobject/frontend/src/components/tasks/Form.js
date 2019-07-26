import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import "./../style/Task.module.css";
import { addTask } from "../../actions/tasks";
import { toggleTaskForm } from "../../actions/visible";

/* Slider */
import closeButton from "./../style/images/delete.png";

/* React Date Picker */
//import DayPicker from "react-day-picker";
//import "react-day-picker/lib/style.css";

export class Form extends React.Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      visible:[]
    };
  }
*/
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
    const { title, description, priority, deadline, toggleTask } = this.state;
    // toggle form
    if (toggleTask == true) {
      return (
        <div className="add-task-container">
          <div className="add-form-back">
            <h3 className="tasks-form-heading">New Task</h3>
            <button
              /*onClick={this.onClickFormToggle}*/
              type="button"
              className="close-task-button"
            >
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
                  <label
                    className="placeholder-text"
                    htmlFor="label-description"
                  >
                    Description
                  </label>
                </div>

                <div className="task-date-back">
                  <div className="task-date-cont">
                    <label>Today</label>
                  </div>
                  <div className="task-date-box">
                    <input
                      className="form-control"
                      type="date"
                      name="deadline"
                      id="label-title"
                      onChange={this.onChange}
                      value={deadline}
                    />
                  </div>
                </div>

                <div className="priority-picker">
                  <label>Priority</label>
                  <div className="priority-numbers">
                    <div className="priority-number">
                      {this.state.priority == 1 ? (
                        <h3 className="priority-select">1</h3>
                      ) : (
                        <h3 className="priority-unselect">1</h3>
                      )}
                    </div>
                    <div className="priority-number">
                      {this.state.priority == 2 ? (
                        <h3 className="priority-select">2</h3>
                      ) : (
                        <h3 className="priority-unselect">2</h3>
                      )}
                    </div>
                    <div className="priority-number">
                      {this.state.priority == 3 ? (
                        <h3 className="priority-select">3</h3>
                      ) : (
                        <h3 className="priority-unselect">3</h3>
                      )}
                    </div>
                    <div className="priority-number">
                      {this.state.priority == 4 ? (
                        <h3 className="priority-select">4</h3>
                      ) : (
                        <h3 className="priority-unselect">4</h3>
                      )}
                    </div>
                    <div className="priority-number">
                      {this.state.priority == 5 ? (
                        <h3 className="priority-select">5</h3>
                      ) : (
                        <h3 className="priority-unselect">5</h3>
                      )}
                    </div>
                  </div>
                  <div className="slider-priority">
                    <input
                      type="range"
                      min={1}
                      max={5}
                      value={priority}
                      onChange={this.onSliderChange}
                    />
                  </div>
                  <div className="complete-form">
                    <button type="submit">ADD</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return "";
    }
  }
}

/*
//maps the state of the props
<<<<<<< HEAD
const mapStateToProps = state => ({
  visible: state.visible.toggleTask
});

=======
function mapStateToProps(state) {
  return {
    visible: state.toggleTaskForm
  };
}
*/
>>>>>>> 81c02e74214fb61f2af3754f7b55b1d5ce0b78fa
export default connect(
  null,
  { addTask/*, toggleTaskForm*/ }
)(Form);
