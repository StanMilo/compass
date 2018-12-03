import React from "react";
import _ from "lodash";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import formFields from "./formFields";
import PersonField from "./PersonField";

class PersonForm extends React.Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={PersonField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    const { submitting, valid, handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          {this.renderFields()}
          <button
            type="submit"
            disabled={!valid || submitting}
            className="teal btn-flat right white-text"
          >
            Next
            <i className="material-icons right">done</i>
          </button>
          <Link to="/persons" className="red btn-flat left white-text">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  _.each(formFields, ({ name, label }) => {
    if (!values[name]) {
      errors[name] = `You must provide ${label}`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "personForm",
  enableReinitialize: true
})(PersonForm);
