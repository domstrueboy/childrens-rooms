import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
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
    );
}
