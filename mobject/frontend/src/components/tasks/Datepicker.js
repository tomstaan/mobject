import React, { Component } from 'react';
import PropTypes from "prop-types";



export default class Datepicker extends React.Component {
    state = {
        deadline: ""
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });


    render() {
        const { deadline } = this.state;
        return (
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

        )
    }
}
