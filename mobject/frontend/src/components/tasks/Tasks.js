import React, { Component, Fragment } from "react";
import "./../style/Dashboard.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTasks, deleteTask } from "../../actions/tasks";

export class Tasks extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    getTasks: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    return (
      <Fragment>
        <div className="col-md-12">
          <div className="dashboard-tasks">
            {this.props.tasks.map(Task => {
              if (Task.priority == 1) {
                return (
                  <div className="dashboard-task-1" key={Task.id}>
                    <div className="dashboard-task-content-1">
                      <label>{Task.deadline}</label>
                      <h3>{Task.title}</h3>
                      <div />
                      <p />
                    </div>
                  </div>
                );
              } else if (Task.priority == 2) {
                return (
                  <div className="dashboard-task-2" key={Task.id}>
                    <h3>{Task.title}</h3>
                  </div>
                );
              } else if (Task.priority == 3) {
                return (
                  <div className="dashboard-task-3" key={Task.id}>
                    <h3>{Task.title}</h3>
                  </div>
                );
              } else if (Task.priority == 4) {
                return (
                  <div className="dashboard-task-4" key={Task.id}>
                    <h3>{Task.title}</h3>
                  </div>
                );
              } else if (Task.priority == 5) {
                return (
                  <div className="dashboard-task-5" key={Task.id}>
                    <h3>{Task.title}</h3>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

export default connect(
  mapStateToProps,
  { getTasks, deleteTask }
)(Tasks);
