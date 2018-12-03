import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Landing from "./Landing";
import Persons from "./person/Persons";
import NewPerson from "./person/NewPerson";
import EditPerson from "./person/EditPerson";

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Route exact path="/" component={Landing} />
      <Route exact path="/persons" component={Persons} />
      <Route path="/persons/new" component={NewPerson} />
      <Route path="/persons/edit" component={EditPerson} />
    </div>
  </Router>
);

export default App;
