import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getObjects } from "../../actions/objects";

export class Objects extends Component {
    static propTypes ={
        objects: PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.getObjects();
    }

    render() {
        return (
            <div>
                <h1>Objects List</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    objects: state.objects.objects
});

export default connect(mapStateToProps, { getObjects })(Objects);
