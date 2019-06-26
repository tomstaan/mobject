import React, { Component, Fragment } from "react";
import "./../style/Dashboard.module.css";
import "./../style/Complete.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTasks, deleteTask, completeTask } from "../../actions/tasks";
//Images
import settingsButton from "./../style/images/settings.png";
import completeButton from "./../style/images/complete.png";
import completedButton from "./../style/images/check.png";
import deleteButton from "./../style/images/delete.png";

export class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  static propTypes = {
    tasks: PropTypes.array.isRequired,
    getTasks: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    completeTask: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getTasks();
  }

  completeClick = e => {
    var task = { ...this.state.e };
    e.completed = true;
    this.setState({ task });
    this.props.completeTask(e.id, e);
  };

  undoClick = e => {
    var task = { ...this.state.e };
    e.completed = false;
    this.setState({ task });
    this.props.completeTask(e.id, e);
  };

  render() {
    const pr_1 = <div className="dashboard-task-inline-1" />;
    const pr_2 = <div className="dashboard-task-inline-2" />;
    const pr_3 = <div className="dashboard-task-inline-3" />;
    const pr_4 = <div className="dashboard-task-inline-4" />;
    const pr_5 = <div className="dashboard-task-inline-5" />;

    return (
      <Fragment>
        <div className="col-md-12">
          <div className="dashboard-tasks">
            {this.props.tasks.map(Task => {
              return (
                <div className="dashboard-task" key={Task.id}>
                  <div className="dashboard-task-content">
                    <label>{Task.deadline}</label>
                    <h3>{Task.title}</h3>
                    <div className="dashboard-task-line">
                      {Task.priority == 1
                        ? pr_1
                        : Task.priority == 2
                        ? pr_2
                        : Task.priority == 3
                        ? pr_3
                        : Task.priority == 4
                        ? pr_4
                        : pr_5}
                    </div>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to
                    </p>
                  </div>
                  <div className="dashboard-task-cover">
                    <div className="dashboard-task-buttons">
                      <div className="dashboard-task-settings">
                        <button type="button">
                          <img src={settingsButton} alt={"settings"} />
                        </button>
                      </div>
                      <div className="dashboard-task-complete">
                        <button
                          type="button"
                          onClick={this.completeClick.bind(this, Task)}
                        >
                          {" "}
                          <img
                            src={completeButton}
                            alt={"complete"}
                            title={"complete"}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {Task.completed ? (
                    <div className="task-complete-back">
                      <button
                        onClick={this.props.deleteTask.bind(this, Task.id)}
                        className="task-delete-confirm"
                      >
                        <img src={deleteButton} alt={"delete"} />
                      </button>
                      <div className="task-complete-cont">
                        <div className="task-complete-circle">
                          <div className="task-complete-svg">
                            <img src={completedButton} alt={"completed"} />
                          </div>
                        </div>
                        <a onClick={this.undoClick.bind(this, Task)}>
                          <h4>Undo</h4>
                        </a>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

//maps the state of the props
const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

export default connect(
  mapStateToProps,
  { getTasks, deleteTask, completeTask }
)(Tasks);
