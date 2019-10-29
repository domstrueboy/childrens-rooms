import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav"

function Task1() {
  return <h2>Task 1</h2>;
}

function Task2() {
  return <h2>Task 2</h2>;
}

function Task3() {
  return <h2>Task 3</h2>;
}

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/task1">
          <Task1 />
        </Route>
        <Route path="/task2">
          <Task2 />
        </Route>
        <Route path="/task3">
          <Task3 />
        </Route>
        <Route path="/">
          <Task1 />
        </Route>
      </Switch>
    </Router>
  );
}