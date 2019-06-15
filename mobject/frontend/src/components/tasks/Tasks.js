import React, { Component, Fragment } from "react";
import "./../style/Dashboard.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTasks, deleteTask } from "../../actions/tasks";
//Images
import settingsButton from "./../style/images/settings.png";
import completeButton from "./../style/images/complete.png";

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
                  <div className="dashboard-task" key={Task.id}>
                    <div className="dashboard-task-content">
                      <label>{Task.deadline}</label>
                      <h3>{Task.title}</h3>
                      <div className="dashboard-task-line">
                        <div className="dashboard-task-inline-1"></div>
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
                            <img src={settingsButton} alt={"settings"}></img>
                          </button>
                        </div>
                        <div className="dashboard-task-complete">
                          <button type="button">
                            <img src={completeButton} alt={"add"}></img>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else if (Task.priority == 2) {
                return (
                  <div className="dashboard-task" key={Task.id}>
                    <div className="dashboard-task-content">
                      <label>{Task.deadline}</label>
                      <h3>{Task.title}</h3>
                      <div className="dashboard-task-line">
                        <div
                          title="Priority"
                          className="dashboard-task-inline-2"
                        ></div>
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
                            <img src={settingsButton} alt={"settings"}></img>
                          </button>
                        </div>
                        <div className="dashboard-task-complete">
                          <button type="button">
                            <img src={completeButton} alt={"add"}></img>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else if (Task.priority == 3) {
                return (
                  <div className="dashboard-task" key={Task.id}>
                    <div className="dashboard-task-content">
                      <label>{Task.deadline}</label>
                      <h3>{Task.title}</h3>
                      <div className="dashboard-task-line">
                        <div className="dashboard-task-inline-3"></div>
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
                            <img src={settingsButton} alt={"settings"}></img>
                          </button>
                        </div>
                        <div className="dashboard-task-complete">
                          <button type="button">
                            <img src={completeButton} alt={"add"}></img>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else if (Task.priority == 4) {
                return (
                  <div className="dashboard-task" key={Task.id}>
                    <div className="dashboard-task-content">
                      <label>{Task.deadline}</label>
                      <h3>{Task.title}</h3>
                      <div className="dashboard-task-line">
                        <div className="dashboard-task-inline-4"></div>
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
                            <img src={settingsButton} alt={"settings"}></img>
                          </button>
                        </div>
                        <div className="dashboard-task-complete">
                          <button type="button">
                            <img src={completeButton} alt={"add"}></img>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else if (Task.priority == 5) {
                return (
                  <div className="dashboard-task" key={Task.id}>
                    <div className="dashboard-task-content">
                      <label>{Task.deadline}</label>
                      <h3>{Task.title}</h3>
                      <div className="dashboard-task-line">
                        <div className="dashboard-task-inline-5"></div>
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
                            <img src={settingsButton} alt={"settings"}></img>
                          </button>
                        </div>
                        <div className="dashboard-task-complete">
                          <button type="button">
                            <img src={completeButton} alt={"add"}></img>
                          </button>
                        </div>
                      </div>
                    </div>
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
