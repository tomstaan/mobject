import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getObjects } from '../../actions/objects';

export default class Objects extends Component {
    render() {
        return (
            <div>
                <h1>Objects List</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    objects: state.objects.objects
});

export default connect(Objects);
