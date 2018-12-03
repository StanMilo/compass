import axios from "axios";
import {
  FETCH_PERSONS,
  CREATE_PERSON,
  FETCH_PERSON,
  RESET_PERSON,
  UPDATE_PERSON,
  REMOVE_PERSON
} from "./types";

export const fetchPersons = () => async dispatch => {
  const { data } = await axios.get("/api/persons");

  dispatch({ type: FETCH_PERSONS, payload: data });
};

export const submitPerson = (values, history) => async dispatch => {
  const { data } = await axios.post("/api/persons", values);

  history.push("/persons");
  dispatch({ type: CREATE_PERSON, payload: data });
};

export const fetchPerson = id => async dispatch => {
  const { data } = await axios.get(`/api/persons/${id}`);

  dispatch({ type: FETCH_PERSON, payload: data });
};

export const resetPerson = () => ({
  type: RESET_PERSON
});

export const updatePerson = (id, values, history) => async dispatch => {
  const { data } = await axios.patch(`/api/persons/${id}`, values);

  history.push("/persons");
  dispatch({ type: UPDATE_PERSON, payload: data });
};

export const removePerson = id => async dispatch => {
  const { data } = await axios.delete(`/api/persons/${id}`);

  dispatch({ type: REMOVE_PERSON, payload: data });
};
