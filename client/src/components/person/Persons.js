import React, { Fragment } from "react";
import moment from "moment";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchPersons, removePerson } from "../../actions";

class Persons extends React.Component {
  componentDidMount() {
    this.props.fetchPersons();
  }

  parseDate = date => moment(date).format("MMMM Do YYYY, h:mm:ss a");

  handleEditButton = personId => e =>
    this.props.history.push("/persons/edit", { personId });

  handleDeleteButton = personId => e => {
    this.props.removePerson(personId);
    this.props.fetchPersons();
  };

  handleAddButton = () => this.props.history.push("/persons/new");

  renderPersons = () => {
    const { persons } = this.props;

    return persons.map(person => (
      <tr key={person._id}>
        <td>{person.name}</td>
        <td>{person.surname}</td>
        <td>{person.city}</td>
        <td>{person.address}</td>
        <td>{person.phone}</td>
        <td>{this.parseDate(person.createdDate)}</td>
        <td>
          <button
            className="btn-floating btn-small btn-flat blue left"
            onClick={this.handleEditButton(person._id)}
          >
            <i className="material-icons">edit</i>
          </button>
          <button
            className="btn-floating btn-small btn-flat red right"
            onClick={this.handleDeleteButton(person._id)}
          >
            <i className="material-icons">delete</i>
          </button>
        </td>
      </tr>
    ));
  };

  renderLoader = () => {
    const { persons } = this.props;
    if (_.isEmpty(persons)) {
      return (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      );
    }
  };

  render() {
    return (
      <Fragment>
        <h3>Persons</h3>

        {this.renderLoader()}

        <table className="striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>City</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Created</th>
            </tr>
          </thead>

          <tbody>{this.renderPersons()}</tbody>
        </table>

        <div className="section">
          <button
            className="btn-floating green darken-1 right"
            onClick={this.handleAddButton}
          >
            <i className="material-icons">add</i>
          </button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ persons: { list } }) => ({ persons: list });

export default connect(
  mapStateToProps,
  { fetchPersons, removePerson }
)(Persons);
