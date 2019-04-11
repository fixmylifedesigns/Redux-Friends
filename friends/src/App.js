import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">Protected page</Link>
            </li>
          </ul>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/protected" components={Friends} />
        </div>
      </Router>
    );
  }
}

export default App;
