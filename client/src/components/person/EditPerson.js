import React, { Fragment } from "react";
import _ from "lodash";
import { connect } from "react-redux";

import PersonForm from "./PersonForm";
import { fetchPerson, resetPerson, updatePerson } from "../../actions";

class EditPerson extends React.Component {
  componentDidMount() {
    const {
      fetchPerson,
      location: {
        state: { personId }
      }
    } = this.props;

    fetchPerson(personId);
  }

  componentWillUnmount() {
    this.props.resetPerson();
  }

  handlePersonUpdate = values => {
    const {
      history,
      updatePerson,
      location: {
        state: { personId }
      }
    } = this.props;
    updatePerson(personId, values, history);
  };

  renderForm = () => {
    const { person } = this.props;

    if (_.isEmpty(person)) {
      return (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      );
    }

    return (
      <PersonForm onSubmit={this.handlePersonUpdate} initialValues={person} />
    );
  };

  render() {
    return (
      <Fragment>
        <h3>Edit Person</h3>
        <div className="divider" />

        <div className="section">{this.renderForm()}</div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ persons: { individual } }) => ({
  person: individual
});

export default connect(
  mapStateToProps,
  { fetchPerson, resetPerson, updatePerson }
)(EditPerson);
