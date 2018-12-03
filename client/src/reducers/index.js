import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import personsReducer from "./personsReducer";

export default combineReducers({
  persons: personsReducer,
  form: reduxForm
});
