import React, { Component, Fragment } from "react";
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
        <h2>Tasks</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>title</th>
              <th>description</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.Tasks.map(Task => (
              <tr key={Task.id}>
                <td>{Task.title}</td>
                <td>{Task.description}</td>
                <td>
                  <button
                    onClick={this.props.deleteTask.bind(this, Task.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
