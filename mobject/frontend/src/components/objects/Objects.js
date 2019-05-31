import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getObjects, deleteObject } from "../../actions/objects";

export class Objects extends Component {
  static propTypes = {
    objects: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getObjects();
  }

  render() {
    return (
      <Fragment>
        <h2>Objects</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>title</th>
              <th>description</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.objects.map(object => (
              <tr key={object.id}>
                <td>{object.title}</td>
                <td>{object.description}</td>
                <td>
                  <button
                    onClick={this.props.deleteObject.bind(this, object.id)}
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
  objects: state.objects.objects
});

export default connect(
  mapStateToProps,
  { getObjects, deleteObject }
)(Objects);
