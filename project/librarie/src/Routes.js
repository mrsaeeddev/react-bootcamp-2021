import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from "./App";
import BooksList from "./components/BookList";
import DashBoard from "./components/DashBoard";

function Routes() {
  return (
    <Router>
        <div>
        <Switch>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/listing">
            <BooksList />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;