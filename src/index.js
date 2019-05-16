import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import login from "./login";
import market from "./market";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
const routing = (
  <Router>
    <div className="navigator">
      {/* <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/market">market</Link>
        </li>
      </ul>
      */}
      <Route exact path="/" component={login} />
      <Route path="/home" component={App} />
      <Route path="/market" component={market} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
