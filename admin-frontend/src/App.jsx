import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page from "./pages/Page";

function Task2() {
  return <h2>Task 2</h2>;
}

function Task3() {
  return <h2>Task 3</h2>;
}

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/task1">Task 1</Link>
            </li>
            <li>
              <Link to="/task2">Task 2</Link>
            </li>
            <li>
              <Link to="/task3">Task 3</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/task1">
            <Page />
          </Route>
          <Route path="/task2">
            <Task2 />
          </Route>
          <Route path="/task3">
            <Task3 />
          </Route>
          <Route path="/">
            <Page />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}