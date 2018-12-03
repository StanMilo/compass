import { FETCH_PERSONS, FETCH_PERSON, RESET_PERSON } from "../actions/types";

const initialValue = {
  list: [],
  individual: {}
};

export default function(state = initialValue, action) {
  switch (action.type) {
    case FETCH_PERSONS:
      return { ...state, list: action.payload };
    case FETCH_PERSON:
      return { ...state, individual: action.payload };
    case RESET_PERSON:
      return { ...state, individual: initialValue.individual };
    default:
      return state;
  }
}
