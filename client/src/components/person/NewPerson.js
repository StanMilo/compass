import React, { Fragment } from "react";
import { connect } from "react-redux";

import PersonForm from "./PersonForm";
import { submitPerson } from "../../actions";

class NewPerson extends React.Component {
  handlePersonSubmit = values => {
    const { history, submitPerson } = this.props;
    submitPerson(values, history);
  };

  render() {
    return (
      <Fragment>
        <h3>Add a Person</h3>
        <div className="divider" />

        <div className="section">
          <PersonForm onSubmit={this.handlePersonSubmit} />
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { submitPerson }
)(NewPerson);
