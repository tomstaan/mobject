import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./../style/App.module.css";
import "./../style/Dashboard.module.css";
import "./../style/Panel.module.css";
//Images
import profileButton from "./../style/images/user.png";
import filterButton from "./../style/images/filter.png";
import searchButton from "./../style/images/search.png";
import addButton from "./../style/images/add.png";

//Form
import { toggleTaskForm } from "../../actions/visible";

export class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleTask: this.props.toggleTask
    };
  }

  static propTypes = {
    toggleTaskForm: PropTypes.func.isRequired
  };

  render() {
    return (
      <Fragment>
        <div className="panel-back">
          <div className="dash-buttons">
            <div className="profile-button">
              <button type="button">
                <img src={profileButton}></img>
              </button>
            </div>
            <div className="filter-button">
              <button type="button">
                <img src={filterButton}></img>
              </button>
            </div>
            <div className="search-button">
              <button type="button">
                <img src={searchButton}></img>
              </button>
            </div>
            <div className="add-button">
              <a href="#" onClick={this.props.toggleTaskForm.bind(this)}>
                <button type="button">
                  <img src={addButton}></img>
                </button>
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { toggleTaskForm }
)(Panel);
